import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localePrefix: "always",

  pathnames: {
    "/": "/",
    "/about": "/about",
    "/products": "/products",
    "/contact": "/contact",
    "/privacy-policy": "/privacy-policy",
    "/products/rattan": "/products/rattan",
    "/products/cork": "/products/cork",
    "/products/bamboo": "/products/bamboo",
    "/products/plastic": "/products/plastic",
    "/products/engraved": "/products/engraved",
    "/products/liners": "/products/liners",
    "/products/[product]": "/products/[product]",
    "/products/[product]/[variant]": "/products/[product]/[variant]",
  },
});
