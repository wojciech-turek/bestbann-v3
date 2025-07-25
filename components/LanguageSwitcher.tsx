"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

const locales = ["fr", "en", "es", "it", "pl"];
const countryCodes: { [key: string]: string } = {
  fr: "FR",
  en: "GB",
  es: "ES",
  it: "IT",
  pl: "PL",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    // Check if the pathname already has a locale
    const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`));
    let newPath;

    if (hasLocale) {
      // Replace the existing locale
      newPath = `/${newLocale}${pathname.substring(3)}`;
    } else {
      // Prepend the new locale
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath, { scroll: false });
  };

  const currentLocale = locales.find((loc) => pathname.startsWith(`/${loc}`));

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale) => (
        <div key={locale} onClick={() => handleLocaleChange(locale)}>
          <ReactCountryFlag
            countryCode={countryCodes[locale]}
            svg
            style={{
              width: "32px",
              height: "22px",
            }}
            title={locale.toUpperCase()}
            className={cn(
              "rounded-md block border-2 border-transparent hover:cursor-pointer",
              currentLocale === locale ? "border-white" : "border-transparent"
            )}
          />
        </div>
      ))}
    </div>
  );
}
