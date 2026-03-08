const FORM_ID = "1zIpoap782bW4SJpccdJDFQDiPEzVQopXmIxOmxOB_5k";

const ROLE_AIML = "AIML Engineer Intern";
const ROLE_ANDROID = "Andriod Developer Intern";

const ITEM_IDS = {
  fullName: 266172263,
  phone: 1219058620,
  email: 1338723436,
  college: 835851506,
  passingYear: 192457738,
  role: 1938443422,
  level: 1416431616,
  yearsOfExperience: 1487835539,
  hasLaptop: 1228133350,
  profileLink: 1615381124,
  aimlTech: 749071131,
  androidTech: 1163441520,
  projectTitle: 1855004339,
  contribution: 1894233687,
  projectStack: 758554805,
  oneLine: 1819097646,
  feature: 483607117,
  resumeLink: 813207751,
};

const PROTECTED_MEMBERS = {
  aqsa: {
    label: "Aqsa Shah",
    fileIdProperty: "AQSA_MEMBER_FILE_ID",
    passwordHashProperty: "AQSA_MEMBER_PASSWORD_HASH",
    profileUrlProperty: "AQSA_MEMBER_PROFILE_URL",
  },
};

function doGet(e) {
  const action = normalizeKey(e && e.parameter && e.parameter.action);

  if (action === "protected-member") {
    try {
      return serveProtectedMember(e);
    } catch (error) {
      console.error(error);

      return protectedMemberOutput({
        ok: false,
        memberKey: normalizeKey(e && e.parameter && e.parameter.member),
        origin: sanitizeOrigin(e && e.parameter && e.parameter.origin),
        requestToken: stringOrEmpty(e && e.parameter && e.parameter.requestToken),
        message: protectedMemberErrorMessage(error),
      });
    }
  }

  return jsonOutput({
    ok: true,
    message: "Career form proxy is running.",
  });
}

function doPost(e) {
  try {
    const payload = parsePayload(e);
    submitCareerResponse(payload);

    return jsonOutput({
      ok: true,
      message: "Career application stored.",
    });
  } catch (error) {
    console.error(error);

    return jsonOutput({
      ok: false,
      error: error.message,
    });
  }
}

function submitCareerResponse(payload) {
  const form = FormApp.openById(FORM_ID);
  const response = form.createResponse();

  response.withItemResponse(textResponse(form, ITEM_IDS.fullName, payload.fullName));
  response.withItemResponse(textResponse(form, ITEM_IDS.phone, payload.phone));
  response.withItemResponse(textResponse(form, ITEM_IDS.email, payload.email));
  response.withItemResponse(textResponse(form, ITEM_IDS.college, payload.college));
  response.withItemResponse(textResponse(form, ITEM_IDS.passingYear, payload.passingYear));

  response.withItemResponse(choiceResponse(form, ITEM_IDS.role, payload.role));
  response.withItemResponse(choiceResponse(form, ITEM_IDS.level, payload.level));
  response.withItemResponse(textResponse(form, ITEM_IDS.yearsOfExperience, payload.yearsOfExperience));
  response.withItemResponse(choiceResponse(form, ITEM_IDS.hasLaptop, payload.hasLaptop));
  response.withItemResponse(textResponse(form, ITEM_IDS.profileLink, payload.profileLink));

  if (payload.role === ROLE_AIML) {
    response.withItemResponse(checkboxResponse(form, ITEM_IDS.aimlTech, payload.tech));
  } else if (payload.role === ROLE_ANDROID) {
    response.withItemResponse(checkboxResponse(form, ITEM_IDS.androidTech, payload.tech));
  } else {
    throw new Error("Unsupported role value.");
  }

  response.withItemResponse(textResponse(form, ITEM_IDS.projectTitle, payload.projectTitle));
  response.withItemResponse(paragraphResponse(form, ITEM_IDS.contribution, payload.contribution));
  response.withItemResponse(paragraphResponse(form, ITEM_IDS.projectStack, payload.projectStack));
  response.withItemResponse(paragraphResponse(form, ITEM_IDS.oneLine, payload.oneLine));
  response.withItemResponse(paragraphResponse(form, ITEM_IDS.feature, payload.feature));
  response.withItemResponse(paragraphResponse(form, ITEM_IDS.resumeLink, payload.resumeLink));

  response.submit();
}

function serveProtectedMember(e) {
  const memberKey = normalizeKey(e && e.parameter && e.parameter.member);
  const member = PROTECTED_MEMBERS[memberKey];
  const origin = sanitizeOrigin(e && e.parameter && e.parameter.origin);
  const requestToken = stringOrEmpty(e && e.parameter && e.parameter.requestToken);

  if (!member) {
    return protectedMemberOutput({
      ok: false,
      memberKey: memberKey,
      origin: origin,
      requestToken: requestToken,
      message: "Unknown protected member.",
    });
  }

  const properties = PropertiesService.getScriptProperties();
  const fileId = stringOrEmpty(properties.getProperty(member.fileIdProperty));
  const expectedHash = stringOrEmpty(properties.getProperty(member.passwordHashProperty));
  const profileUrl = stringOrEmpty(properties.getProperty(member.profileUrlProperty));
  const suppliedHash = stringOrEmpty(e && e.parameter && e.parameter.passwordHash);

  if (!fileId || !expectedHash) {
    return protectedMemberOutput({
      ok: false,
      memberKey: memberKey,
      origin: origin,
      requestToken: requestToken,
      message: "Protected image is not configured yet.",
    });
  }

  if (!suppliedHash || suppliedHash !== expectedHash) {
    return protectedMemberOutput({
      ok: false,
      memberKey: memberKey,
      origin: origin,
      requestToken: requestToken,
      message: "Incorrect password.",
    });
  }

  const file = DriveApp.getFileById(fileId);
  const blob = file.getBlob();

  return protectedMemberOutput({
    ok: true,
    memberKey: memberKey,
    origin: origin,
    requestToken: requestToken,
    label: member.label,
    imageDataUri: createDataUri(blob),
    profileUrl: profileUrl,
  });
}

function protectedMemberErrorMessage(error) {
  const message = stringOrEmpty(error && error.message);

  if (
    message.indexOf("permission to call DriveApp.getFileById") !== -1 ||
    message.indexOf("Required permissions") !== -1
  ) {
    return "Apps Script still needs Drive access. Run a Drive-reading function once from the editor and approve permissions.";
  }

  return message || "Unable to load the protected image right now.";
}

function protectedMemberOutput(config) {
  const payload = {
    type: "protected-member-status",
    member: config.memberKey,
    ok: config.ok,
    requestToken: config.requestToken,
    error: config.ok ? "" : config.message,
    profileUrl: config.ok ? stringOrEmpty(config.profileUrl) : "",
  };

  const targetOrigin = config.origin || "*";
  const body = config.ok
    ? '<img src="' + escapeHtml(config.imageDataUri) + '" alt="' + escapeHtml(config.label) + '" />'
    : '<div class="cx-error">' +
        '<div class="cx-errorTitle">Protected Image</div>' +
        '<div class="cx-errorText">' + escapeHtml(config.message) + "</div>" +
      "</div>";

  const html = [
    "<!DOCTYPE html>",
    "<html>",
    "<head>",
    '  <meta charset="utf-8" />',
    '  <meta name="viewport" content="width=device-width, initial-scale=1" />',
    "  <style>",
    "    html, body { margin: 0; height: 100%; background: #03171a; }",
    "    body { display: grid; place-items: center; overflow: hidden; font-family: Arial, sans-serif; }",
    "    .cx-shell { width: 100%; height: 100%; display: grid; place-items: center; }",
    "    .cx-shell img { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }",
    "    .cx-error { width: 100%; height: 100%; display: grid; place-items: center; text-align: center; color: #eaf7f8; background: radial-gradient(circle at top, rgba(47, 198, 205, 0.16), transparent 55%), #03171a; padding: 20px; box-sizing: border-box; }",
    "    .cx-errorTitle { font-size: 16px; font-weight: 700; letter-spacing: 0.02em; }",
    "    .cx-errorText { margin-top: 8px; font-size: 13px; opacity: 0.84; }",
    "  </style>",
    "</head>",
    "<body>",
    '  <div class="cx-shell">' + body + "</div>",
    "  <script>",
    "    (function () {",
    "      var payload = " + JSON.stringify(payload) + ";",
    "      var targetOrigin = " + JSON.stringify(targetOrigin) + ";",
    "      function postToTarget(target, origin) {",
    "        if (!target || target === window) return false;",
    "        try {",
    "          target.postMessage(payload, origin);",
    "          return true;",
    "        } catch (error) {",
    "          return false;",
    "        }",
    "      }",
    "      if (!postToTarget(window.top, targetOrigin)) {",
    "        postToTarget(window.parent, '*');",
    "      }",
    "    })();",
    "  </script>",
    "</body>",
    "</html>",
  ].join("\n");

  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(
    HtmlService.XFrameOptionsMode.ALLOWALL
  );
}

function setupAqsaProtectedMember() {
  const fileId = "19JQ0yJRTDQLUkcoKAcT-f0MxUECCjYa6";
  const passwordHash = "306b0b84c1edeeef9ea114b0425a13c386d1d9fa72ede9bc60496e2d9001daa9";
  const profileUrl = "https://www.linkedin.com/in/aqsashah2004/";
  const file = DriveApp.getFileById(fileId);

  PropertiesService.getScriptProperties().setProperties({
    AQSA_MEMBER_FILE_ID: fileId,
    AQSA_MEMBER_PASSWORD_HASH: passwordHash,
    AQSA_MEMBER_PROFILE_URL: profileUrl,
  });

  return "Configured protected member for: " + file.getName();
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body.");
  }

  let payload;

  try {
    payload = JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error("Invalid JSON payload.");
  }

  return {
    fullName: requireString(payload.fullName, "fullName"),
    phone: requireString(payload.phone, "phone"),
    email: requireString(payload.email, "email"),
    college: requireString(payload.college, "college"),
    passingYear: requireString(payload.passingYear, "passingYear"),
    role: requireString(payload.role, "role"),
    level: requireString(payload.level, "level"),
    yearsOfExperience: requireString(payload.yearsOfExperience, "yearsOfExperience"),
    hasLaptop: requireString(payload.hasLaptop, "hasLaptop"),
    profileLink: requireString(payload.profileLink, "profileLink"),
    tech: requireStringArray(payload.tech, "tech"),
    projectTitle: requireString(payload.projectTitle, "projectTitle"),
    contribution: requireString(payload.contribution, "contribution"),
    projectStack: requireString(payload.projectStack, "projectStack"),
    oneLine: requireString(payload.oneLine, "oneLine"),
    feature: requireString(payload.feature, "feature"),
    resumeLink: requireString(payload.resumeLink, "resumeLink"),
  };
}

function textResponse(form, itemId, value) {
  return form.getItemById(itemId).asTextItem().createResponse(value);
}

function paragraphResponse(form, itemId, value) {
  return form.getItemById(itemId).asParagraphTextItem().createResponse(value);
}

function choiceResponse(form, itemId, value) {
  return form.getItemById(itemId).asMultipleChoiceItem().createResponse(value);
}

function checkboxResponse(form, itemId, values) {
  return form.getItemById(itemId).asCheckboxItem().createResponse(values);
}

function requireString(value, fieldName) {
  if (typeof value !== "string") {
    throw new Error(fieldName + " must be a string.");
  }

  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error(fieldName + " is required.");
  }

  return trimmed;
}

function requireStringArray(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new Error(fieldName + " must be an array.");
  }

  const items = value
    .map(function (entry) {
      return typeof entry === "string" ? entry.trim() : "";
    })
    .filter(Boolean);

  if (!items.length) {
    throw new Error(fieldName + " is required.");
  }

  return items;
}

function createDataUri(blob) {
  const mimeType = blob.getContentType() || "image/jpeg";
  const base64 = Utilities.base64Encode(blob.getBytes());
  return "data:" + mimeType + ";base64," + base64;
}

function sha256Hex(value) {
  const bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    value,
    Utilities.Charset.UTF_8
  );

  return bytes
    .map(function (byte) {
      const normalized = byte < 0 ? byte + 256 : byte;
      return ("0" + normalized.toString(16)).slice(-2);
    })
    .join("");
}

function normalizeKey(value) {
  return stringOrEmpty(value).toLowerCase();
}

function stringOrEmpty(value) {
  return String(value || "").trim();
}

function sanitizeOrigin(value) {
  const origin = stringOrEmpty(value);
  const pattern = /^https?:\/\/[A-Za-z0-9.-]+(?::\d+)?$/;
  return pattern.test(origin) ? origin : "*";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonOutput(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
