import "@/app/globals.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { BASE_URL, getOgImage, ogImages } from "@/lib/seo";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Libre_Baskerville, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-deco",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BestBann — Premium Bread Proofing Baskets",
    template: "%s | BestBann",
  },
  description:
    "Handmade bread proofing baskets from natural rattan, cork, bamboo and more. Family-owned with 14+ years of experience, delivering to 30+ countries worldwide.",
  openGraph: {
    type: "website",
    siteName: "BestBann",
    locale: "en",
    images: [getOgImage(ogImages.home)],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BestBann",
  url: BASE_URL,
  logo: `${BASE_URL}/imgs/logo-black.png`,
  description:
    "Family-owned manufacturer of premium bread proofing baskets, delivering handmade rattan, cork and bamboo bannetons to 30+ countries.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48-12-307-28-77",
    email: "office@bestbann.com",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sapiehy 21",
    addressLocality: "Kraków",
    postalCode: "31-644",
    addressCountry: "PL",
  },
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${plusJakartaSans.variable} ${libreBaskerville.variable} font-sans antialiased bg-beige-1 overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <JsonLd data={organizationJsonLd} />
        <NextIntlClientProvider>
          <Header />
          <Breadcrumbs />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
