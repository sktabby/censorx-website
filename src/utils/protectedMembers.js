const PROTECTED_MEMBER_PREFIX = "censorx-protected-member:";
export const PROTECTED_MEMBER_UNLOCK_EVENT = "censorx:protected-member-unlocked";

function getStorageKey(memberKey) {
  return `${PROTECTED_MEMBER_PREFIX}${String(memberKey || "").toLowerCase()}`;
}

export function readProtectedMemberUnlock(memberKey) {
  if (typeof window === "undefined" || !window.sessionStorage) {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(getStorageKey(memberKey));
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    return {
      memberKey: String(parsed.memberKey || memberKey || "").toLowerCase(),
      unlocked: parsed.unlocked !== false,
      profileUrl: String(parsed.profileUrl || "").trim(),
      unlockedAt: Number(parsed.unlockedAt || Date.now()),
    };
  } catch (error) {
    return null;
  }
}

export function saveProtectedMemberUnlock(memberKey, payload = {}) {
  if (typeof window === "undefined" || !window.sessionStorage) {
    return;
  }

  const detail = {
    memberKey: String(memberKey || "").toLowerCase(),
    unlocked: true,
    profileUrl: String(payload.profileUrl || "").trim(),
    unlockedAt: Date.now(),
  };

  try {
    window.sessionStorage.setItem(getStorageKey(memberKey), JSON.stringify(detail));
  } catch (error) {
    return;
  }

  window.dispatchEvent(new CustomEvent(PROTECTED_MEMBER_UNLOCK_EVENT, { detail }));
}
