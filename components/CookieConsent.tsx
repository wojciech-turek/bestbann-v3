"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";

function getCookieConsent() {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("cookie_consent="));
  return match?.split("=")[1] ?? null;
}

function subscribe(callback: () => void) {
  window.addEventListener("cookie-consent-changed", callback);
  return () => window.removeEventListener("cookie-consent-changed", callback);
}

function getSnapshot() {
  return getCookieConsent();
}

function getServerSnapshot() {
  return null as string | null;
}

export default function CookieConsent() {
  const t = useTranslations("CookieConsent");
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setConsent = (value: "accepted" | "rejected") => {
    const maxAge = 365 * 24 * 60 * 60;
    document.cookie = `cookie_consent=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
    window.dispatchEvent(new Event("cookie-consent-changed"));

    if (value === "accepted") {
      window.dispatchEvent(new Event("cookie-consent-accepted"));
    }
  };

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-brown-10 bg-white p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[680px] text-sm leading-relaxed text-brown-80">
          {t("message")}{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-brown-100"
          >
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => setConsent("rejected")}
            className="rounded-full border border-brown-20 px-5 py-2 text-sm font-medium text-brown-100 transition hover:bg-brown-8"
          >
            {t("reject")}
          </button>
          <button
            onClick={() => setConsent("accepted")}
            className="rounded-full bg-brown-100 px-5 py-2 text-sm font-medium text-white transition hover:bg-dark-brown"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
