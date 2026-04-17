"use client";

import { GoogleAnalytics as GA } from "@next/third-parties/google";
import { useSyncExternalStore } from "react";

function getCookieConsent() {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cookie_consent="));
  return match?.split("=")[1] ?? null;
}

function subscribe(callback: () => void) {
  window.addEventListener("cookie-consent-accepted", callback);
  window.addEventListener("cookie-consent-changed", callback);
  return () => {
    window.removeEventListener("cookie-consent-accepted", callback);
    window.removeEventListener("cookie-consent-changed", callback);
  };
}

function getSnapshot() {
  return getCookieConsent() === "accepted";
}

function getServerSnapshot() {
  return false;
}

export default function GoogleAnalytics() {
  const hasConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId || !hasConsent) return null;

  return <GA gaId={gaId} />;
}
