import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "always",

  pathnames: {
    "/": "/",
    "/about": {
      de: "/ueber-uns",
    },
    "/products": {
      de: "/produkte",
    },
    "/contact": {
      de: "/kontakt",
    },
    "/privacy-policy": {
      de: "/datenschutz",
    },
    "/legal-notice": {
      de: "/impressum",
    },
    "/products/rattan": {
      de: "/produkte/rattan",
    },
    "/products/cork": {
      de: "/produkte/kork",
    },
    "/products/bamboo": {
      de: "/produkte/bambus",
    },
    "/products/plastic": {
      de: "/produkte/plastik",
    },
    "/products/engraved": {
      de: "/produkte/graviert",
    },
    "/products/liners": {
      de: "/produkte/liner",
    },
  },
});
