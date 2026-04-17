# BestBann SEO Foundation — Design Spec

## Context

BestBann (bestbann.com) is a Next.js 16 site selling premium bread proofing baskets. The site currently has placeholder metadata ("Create Next App"), no SEO infrastructure (no sitemap, robots.txt, OG tags, structured data), no analytics, no cookie consent, and a non-functional contact form. The DE locale needs to be removed (Germany is geoblocked); future locales (FR, IT, etc.) will be added later. This spec covers a comprehensive SEO foundation pass to make the site search-engine and compliance ready.

## Scope

### 1. Remove DE Locale

**Files to modify:**
- `i18n/routing.ts` — remove `"de"` from locales array, remove all `de:` pathname entries
- `app/messages/de.json` — delete file
- `components/LanguageSwitcher.tsx` — hide component entirely (only 1 locale). Keep the file but render nothing when there's only 1 locale, so it's ready for FR/IT later
- `components/Header.tsx` — remove LanguageSwitcher from header (or it hides itself)
- `app/[locale]/layout.tsx` — `generateStaticParams` will naturally only produce `["en"]`

**Routing cleanup:** Remove all German pathname mappings from `routing.ts`. Keep the localized pathname structure so adding FR/IT later is just adding entries.

### 2. Metadata System

**Root layout** (`app/[locale]/layout.tsx`):
- Replace static `metadata` export with `generateMetadata(props)` function
- Set `metadataBase: new URL("https://bestbann.com")`
- Title template: `"%s | BestBann"` with default `"BestBann — Premium Bread Proofing Baskets"`
- Default description: business-appropriate description of BestBann
- Default OpenGraph: `type: "website"`, `siteName: "BestBann"`, `locale: "en"`
- Default Twitter card: `card: "summary_large_image"`
- `alternates.canonical` for each page

**Per-page metadata** — each page gets `generateMetadata`:

| Page | Title | Description focus |
|------|-------|-------------------|
| Home | "BestBann — Premium Bread Proofing Baskets" | Company overview, product range |
| Products | "Our Products \| BestBann" | Product catalog, basket types |
| Products/[product] | "{Product Name} Baskets \| BestBann" | Dynamic from catalog data |
| About | "About Us \| BestBann" | Family company, 14 years experience |
| Contact | "Contact Us \| BestBann" | Get in touch, office info |
| Privacy Policy | "Privacy Policy \| BestBann" | Privacy and data handling |

Each page also sets:
- `alternates.canonical` — the canonical URL for that page
- OpenGraph title, description (matching or slightly varied from meta)
- When more locales are added: `alternates.languages` for hreflang

**Metadata translations:** Add a `"Metadata"` namespace to `en.json` with all page titles and descriptions so they're ready for localization when FR/IT are added.

### 3. robots.ts + sitemap.ts

**`app/robots.ts`** (Next.js Metadata File API):
```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://bestbann.com/sitemap.xml",
  };
}
```

**`app/sitemap.ts`** (dynamic sitemap):
- Static routes: `/en`, `/en/about`, `/en/contact`, `/en/products`, `/en/privacy-policy`
- Dynamic routes: all product pages from `productsCatalog.products` → `/en/products/{slug}`
- Each entry: `url`, `lastModified: new Date()`, `changeFrequency`, `priority`
- When more locales are added: generate entries for each locale

### 4. OpenGraph + Twitter Cards

- Default OG image path: `/imgs/og-default.jpg` (1200x630px — user will provide or we create a placeholder)
- Twitter card: `summary_large_image`
- Product detail pages: use product `coverImage` as OG image
- All other pages: use default OG image

### 5. JSON-LD Structured Data

**Organization schema** — rendered in root layout as `<script type="application/ld+json">`:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BestBann",
  "url": "https://bestbann.com",
  "logo": "https://bestbann.com/imgs/logo-black.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48-12-307-28-77",
    "email": "office@bestbann.com"
  }
}
```

**Product schema** — on `/products/[product]` pages:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "...",
  "image": "...",
  "brand": { "@type": "Brand", "name": "BestBann" },
  "description": "..."
}
```

Create a reusable `components/JsonLd.tsx` component that takes a JSON object and renders the script tag.

### 6. Google Analytics (GA4) + Cookie Consent

**GA4 setup:**
- Install `@next/third-parties` package
- Create `components/GoogleAnalytics.tsx` — wraps the GA4 script, only renders when consent cookie is `"accepted"`
- GA measurement ID stored as environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Script loads in root layout, gated by consent state

**Cookie consent banner** (`components/CookieConsent.tsx`):
- Client component rendered in root layout
- Appears at bottom of viewport, fixed position
- Two buttons: "Accept All" and "Necessary Only"
- On "Accept All": sets `cookie_consent=accepted` cookie (1 year expiry), triggers GA load
- On "Necessary Only": sets `cookie_consent=rejected` cookie (1 year expiry), no GA
- Banner hidden when cookie exists (either value)
- Localized text via translations (ready for FR/IT)
- Simple, clean design matching site's beige/brown aesthetic

**Privacy integration:**
- Privacy policy page explains what cookies are used and for what
- Links to manage consent (user can clear cookie to re-trigger banner)

### 7. Privacy Policy Page

**`app/[locale]/privacy-policy/page.tsx`:**
- Server component with `generateMetadata`
- Content from translations (`en.json` → `"PrivacyPolicy"` namespace)
- Sections: Introduction, Data We Collect, Cookies & Analytics, Your Rights, Contact Info
- Styled consistently with rest of site (TypographyH1, TypographyH2, etc.)

### 8. Bug Fixes

1. **Footer "asd"** — `components/Footer.tsx:73` — remove ` asd` from the heading line
2. **LanguageSwitcher** — `components/LanguageSwitcher.tsx` — render nothing when only 1 locale is configured (read from routing config instead of hardcoded list)

## Files Summary

| Action | File | What changes |
|--------|------|-------------|
| Modify | `i18n/routing.ts` | Remove DE locale and German pathnames |
| Delete | `app/messages/de.json` | No longer needed |
| Modify | `app/messages/en.json` | Add Metadata, CookieConsent, PrivacyPolicy namespaces |
| Modify | `app/[locale]/layout.tsx` | generateMetadata, JSON-LD Organization, GA + CookieConsent in body |
| Modify | `app/[locale]/(home)/page.tsx` | Add generateMetadata |
| Modify | `app/[locale]/products/page.tsx` | Add generateMetadata |
| Modify | `app/[locale]/products/[product]/page.tsx` | Add generateMetadata + Product JSON-LD |
| Modify | `app/[locale]/about/page.tsx` | Add generateMetadata |
| Modify | `app/[locale]/contact/page.tsx` | Add generateMetadata |
| Create | `app/[locale]/privacy-policy/page.tsx` | Privacy policy page |
| Create | `app/robots.ts` | Robots rules |
| Create | `app/sitemap.ts` | Dynamic sitemap |
| Create | `components/CookieConsent.tsx` | Cookie consent banner |
| Create | `components/GoogleAnalytics.tsx` | GA4 wrapper with consent gating |
| Create | `components/JsonLd.tsx` | Reusable JSON-LD script component |
| Modify | `components/Footer.tsx` | Remove "asd" bug |
| Modify | `components/LanguageSwitcher.tsx` | Hide when single locale |
| Modify | `package.json` | Add @next/third-parties |
| Create | `.env.local` | NEXT_PUBLIC_GA_MEASUREMENT_ID placeholder |

## Reusable Existing Code

- `lib/products-catalog.ts` — `productsCatalog` and `getProductBySlug()` for dynamic metadata/sitemap
- `i18n/routing.ts` — `routing.locales` and `routing.pathnames` for sitemap generation
- `i18n/navigation.ts` — `getPathname()` for generating localized URLs in sitemap
- `components/shared/TypographyH*.tsx` — for privacy policy page styling
- Translation pattern (`getTranslations` / `useTranslations`) — for all new localized content

## Verification

1. **Build check:** `pnpm build` succeeds with no errors
2. **Metadata:** View page source on each route — verify unique title, description, OG tags, canonical URL
3. **robots.txt:** Visit `/robots.txt` — verify content
4. **sitemap.xml:** Visit `/sitemap.xml` — verify all pages listed with correct URLs
5. **JSON-LD:** Use Google Rich Results Test or view source for `<script type="application/ld+json">`
6. **Cookie consent:** Load site fresh (clear cookies) — banner appears. Accept → GA loads. Reject → GA doesn't load. Refresh → banner stays hidden.
7. **Privacy policy:** Navigate to `/en/privacy-policy` — page renders with content
8. **Footer:** Verify "asd" is gone
9. **Language switcher:** Verify it's hidden (only EN active)
10. **DE removal:** Verify `/de/` routes return 404
