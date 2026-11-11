/**
 * CensorX — Contact page backend (School partnership + Feedback forms)
 *
 * What it does for every submission:
 *   1. Validates the JSON body (required fields, formats, length limits).
 *   2. Drops bots (honeypot) and rapid duplicate submissions.
 *   3. Appends a row to a Google Sheet ("Schools" or "Feedback" tab).
 *   4. Emails a notification to NOTIFY_EMAIL, with Reply-To set to the sender.
 *
 * Deploy as its own Apps Script project (see README.md in this folder).
 */

const NOTIFY_EMAIL = "team@censorx.in";
const SPREADSHEET_NAME = "CensorX - Contact form responses";
const SHEET_ID_PROPERTY = "CONTACT_SHEET_ID";
const DUPLICATE_WINDOW_SECONDS = 30;

const SHEETS = {
  schools: {
    name: "Schools",
    headers: [
      "Timestamp",
      "Contact name",
      "Role",
      "Email",
      "Phone",
      "School",
      "City / State",
      "Board",
      "Students",
      "Grades",
      "Interested in",
      "Preferred contact",
      "Message",
      "Page",
    ],
  },
  feedback: {
    name: "Feedback",
    headers: [
      "Timestamp",
      "Name",
      "Email",
      "I am a",
      "Category",
      "About",
      "Rating",
      "Message",
      "Device model",
      "Android version",
      "Wants reply",
      "Page",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Entry points                                                        */
/* ------------------------------------------------------------------ */

function doGet() {
  return jsonOutput({ ok: true, message: "Contact form backend is running." });
}

function doPost(e) {
  try {
    const raw = parseBody(e);

    // Honeypot: real people never fill this hidden field.
    // Answer "ok" so bots do not learn they were dropped.
    if (cleanString(raw.website)) {
      return jsonOutput({ ok: true });
    }

    const formType = cleanString(raw.formType).toLowerCase();
    let entry;

    if (formType === "schools") {
      entry = parseSchools(raw);
    } else if (formType === "feedback") {
      entry = parseFeedback(raw);
    } else {
      throw new ValidationError("Unknown form type.");
    }

    if (isDuplicate(formType, entry)) {
      // Same person pressing submit twice: treat as success, store once.
      return jsonOutput({ ok: true, duplicate: true });
    }

    appendRow(formType, entry.row);
    notify(entry);

    return jsonOutput({ ok: true });
  } catch (error) {
    console.error(error);

    if (error instanceof ValidationError) {
      return jsonOutput({ ok: false, error: error.message });
    }

    return jsonOutput({
      ok: false,
      error: "Something went wrong on our side. Please try again.",
    });
  }
}

/**
 * Run this ONCE from the Apps Script editor before deploying.
 * It asks for Sheets + Mail permission, creates the spreadsheet,
 * and logs its URL.
 */
function setup() {
  const spreadsheet = getSpreadsheet();
  Object.keys(SHEETS).forEach(function (key) {
    getSheet(spreadsheet, SHEETS[key]);
  });

  // Touch MailApp so the permission prompt includes sending email.
  MailApp.getRemainingDailyQuota();

  console.log("Responses spreadsheet: " + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

/* ------------------------------------------------------------------ */
/* Parsing + validation                                                */
/* ------------------------------------------------------------------ */

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}
ValidationError.prototype = Object.create(Error.prototype);

function parseBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new ValidationError("Missing request body.");
  }

  if (e.postData.contents.length > 20000) {
    throw new ValidationError("Request is too large.");
  }

  try {
    const body = JSON.parse(e.postData.contents);
    if (!body || typeof body !== "object") throw new Error("not an object");
    return body;
  } catch (error) {
    throw new ValidationError("Invalid request.");
  }
}

function parseSchools(raw) {
  const contactName = requireText(raw.contactName, "Your name", 100);
  const role = requireText(raw.role, "Your role", 60);
  const email = requireEmail(raw.email);
  const phone = requirePhone(raw.phone);
  const schoolName = requireText(raw.schoolName, "School name", 150);
  const city = requireText(raw.city, "City / State", 100);
  const board = optionalText(raw.board, 60);
  const studentCount = requireText(raw.studentCount, "Number of students", 40);
  const grades = optionalList(raw.grades, 8, 40);
  const interests = requireList(raw.interests, "What you are interested in", 8, 60);
  const preferredContact = optionalText(raw.preferredContact, 30);
  const message = optionalText(raw.message, 2000);
  const page = optionalText(raw.page, 200);

  return {
    dedupeKey: email + "|" + schoolName,
    replyTo: email,
    subject: "School partnership enquiry - " + schoolName,
    summary: [
      ["Contact name", contactName],
      ["Role", role],
      ["Email", email],
      ["Phone", phone],
      ["School", schoolName],
      ["City / State", city],
      ["Board", board],
      ["Students", studentCount],
      ["Grades", grades.join(", ")],
      ["Interested in", interests.join(", ")],
      ["Preferred contact", preferredContact],
      ["Message", message],
    ],
    row: [
      new Date(),
      contactName,
      role,
      email,
      phone,
      schoolName,
      city,
      board,
      studentCount,
      grades.join(", "),
      interests.join(", "),
      preferredContact,
      message,
      page,
    ],
  };
}

function parseFeedback(raw) {
  const wantsReply = raw.wantsReply === true;
  const name = optionalText(raw.name, 100);
  const email = wantsReply ? requireEmail(raw.email) : optionalEmail(raw.email);
  const userType = requireText(raw.userType, "Who you are", 40);
  const category = requireText(raw.category, "Feedback type", 40);
  const about = requireText(raw.about, "What it is about", 40);
  const rating = optionalRating(raw.rating);
  const message = requireText(raw.message, "Your feedback", 3000);
  const deviceModel = optionalText(raw.deviceModel, 80);
  const androidVersion = optionalText(raw.androidVersion, 40);
  const page = optionalText(raw.page, 200);

  if (message.length < 10) {
    throw new ValidationError("Please tell us a little more in your feedback.");
  }

  return {
    dedupeKey: (email || name || "anon") + "|" + message.slice(0, 80),
    replyTo: email,
    subject: "Feedback (" + category + ") - " + about,
    summary: [
      ["Name", name],
      ["Email", email],
      ["I am a", userType],
      ["Category", category],
      ["About", about],
      ["Rating", rating ? rating + " / 5" : ""],
      ["Message", message],
      ["Device model", deviceModel],
      ["Android version", androidVersion],
      ["Wants reply", wantsReply ? "Yes" : "No"],
    ],
    row: [
      new Date(),
      name,
      email,
      userType,
      category,
      about,
      rating,
      message,
      deviceModel,
      androidVersion,
      wantsReply ? "Yes" : "No",
      page,
    ],
  };
}

function cleanString(value) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

// Keeps line breaks, for long messages.
function cleanMultiline(value) {
  return typeof value === "string"
    ? value.replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").trim()
    : "";
}

function requireText(value, label, maxLength) {
  const text = maxLength > 500 ? cleanMultiline(value) : cleanString(value);
  if (!text) throw new ValidationError(label + " is required.");
  if (text.length > maxLength) throw new ValidationError(label + " is too long.");
  return text;
}

function optionalText(value, maxLength) {
  const text = maxLength > 500 ? cleanMultiline(value) : cleanString(value);
  return text.slice(0, maxLength);
}

function requireEmail(value) {
  const email = cleanString(value).toLowerCase();
  if (!email) throw new ValidationError("Email is required.");
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    throw new ValidationError("Please enter a valid email address.");
  }
  return email;
}

function optionalEmail(value) {
  return cleanString(value) ? requireEmail(value) : "";
}

function requirePhone(value) {
  const phone = cleanString(value);
  const digits = phone.replace(/\D/g, "");
  if (!phone) throw new ValidationError("Phone number is required.");
  if (!/^[+\d][\d\s()-]*$/.test(phone) || digits.length < 7 || digits.length > 15) {
    throw new ValidationError("Please enter a valid phone number.");
  }
  return phone;
}

function optionalList(value, maxItems, maxLength) {
  if (!Array.isArray(value)) return [];
  return value
    .map(cleanString)
    .filter(Boolean)
    .slice(0, maxItems)
    .map(function (item) {
      return item.slice(0, maxLength);
    });
}

function requireList(value, label, maxItems, maxLength) {
  const items = optionalList(value, maxItems, maxLength);
  if (!items.length) throw new ValidationError(label + " is required.");
  return items;
}

function optionalRating(value) {
  const rating = Number(value);
  return Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : "";
}

/* ------------------------------------------------------------------ */
/* Storage                                                             */
/* ------------------------------------------------------------------ */

function getSpreadsheet() {
  const properties = PropertiesService.getScriptProperties();
  const existingId = properties.getProperty(SHEET_ID_PROPERTY);

  if (existingId) {
    return SpreadsheetApp.openById(existingId);
  }

  const created = SpreadsheetApp.create(SPREADSHEET_NAME);
  properties.setProperty(SHEET_ID_PROPERTY, created.getId());
  return created;
}

function getSheet(spreadsheet, config) {
  let sheet = spreadsheet.getSheetByName(config.name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(config.name);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(config.headers);
    sheet.getRange(1, 1, 1, config.headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function appendRow(formType, row) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    const sheet = getSheet(getSpreadsheet(), SHEETS[formType]);
    sheet.appendRow(row.map(safeCell));
  } finally {
    lock.releaseLock();
  }
}

// Stops a submitted value from being run as a spreadsheet formula.
function safeCell(value) {
  if (typeof value === "string" && /^[=+\-@\t\r]/.test(value)) {
    return "'" + value;
  }
  return value;
}

function isDuplicate(formType, entry) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    formType + "|" + entry.dedupeKey,
    Utilities.Charset.UTF_8
  );
  const key = "dup_" + Utilities.base64EncodeWebSafe(digest).slice(0, 40);
  const cache = CacheService.getScriptCache();

  if (cache.get(key)) return true;

  cache.put(key, "1", DUPLICATE_WINDOW_SECONDS);
  return false;
}

/* ------------------------------------------------------------------ */
/* Email notification                                                  */
/* ------------------------------------------------------------------ */

function notify(entry) {
  // The row is already saved; a mail failure must not fail the request.
  try {
    const lines = entry.summary
      .filter(function (pair) {
        return pair[1] !== "" && pair[1] !== null && pair[1] !== undefined;
      })
      .map(function (pair) {
        return pair[0] + ": " + pair[1];
      });

    const options = {
      to: NOTIFY_EMAIL,
      subject: "[CensorX website] " + entry.subject,
      body: lines.join("\n\n"),
    };

    if (entry.replyTo) options.replyTo = entry.replyTo;

    MailApp.sendEmail(options);
  } catch (error) {
    console.error("Notification email failed: " + error);
  }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function jsonOutput(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
