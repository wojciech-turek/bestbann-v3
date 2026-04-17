"use client";

import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

const countryCodes: { [key: string]: string } = {
  en: "GB",
  fr: "FR",
  es: "ES",
  it: "IT",
  pl: "PL",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locales = routing.locales;

  // Hide when only one locale is configured
  if (locales.length <= 1) {
    return null;
  }

  const handleLocaleChange = (newLocale: string) => {
    const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`));
    let newPath;

    if (hasLocale) {
      newPath = `/${newLocale}${pathname.substring(3)}`;
    } else {
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
            countryCode={countryCodes[locale] ?? locale.toUpperCase()}
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
