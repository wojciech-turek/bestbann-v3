import { TypographyH1 } from "@/components/shared/TypographyH1";
import { getOgImage, ogImages } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("privacyPolicy.title"),
    description: t("privacyPolicy.description"),
    alternates: { canonical: "/en/privacy-policy" },
    openGraph: { images: [getOgImage(ogImages.privacyPolicy)] },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  const sections = [
    "dataCollection",
    "cookies",
    "analytics",
    "yourRights",
    "contact",
  ] as const;

  return (
    <div className="bg-beige-1 px-4 py-10 sm:px-9 sm:py-16">
      <div className="mx-auto max-w-[860px]">
        <TypographyH1>{t("title")}</TypographyH1>
        <p className="mt-2 text-sm text-brown-60">{t("lastUpdated")}</p>

        <div className="mt-10 space-y-10">
          <p className="text-base leading-7 text-brown-80">
            {t("introduction")}
          </p>

          {sections.map((section) => (
            <section key={section} className="space-y-3">
              <h2 className="text-2xl font-medium text-brown-100">
                {t(`sections.${section}.title`)}
              </h2>
              <p className="text-base leading-7 text-brown-80">
                {t(`sections.${section}.content`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
