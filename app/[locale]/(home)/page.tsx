import { getOgImage, ogImages } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BenefitsBannetons from "./components/BenefitsBannetons";
import BestSellers from "./components/BestSellers";
import CorkBaskets from "./components/CorkBaskets";
import CustomerFeedback from "./components/CustomerFeedback";
import FamilyCompany from "./components/FamilyCompany";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import OurProducts from "./components/OurProducts";
import UniqueBasket from "./components/UniqueBasket";
import WeMakeBannetons from "./components/WeMakeBannetons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    alternates: { canonical: "/en" },
    openGraph: { images: [getOgImage(ogImages.home)] },
  };
}

export default async function Home() {
  return (
    <div className="flex flex-col gap-20 sm:gap-40 overflow-x-hidden">
      <Hero />
      <WeMakeBannetons />
      <OurProducts />
      <BenefitsBannetons />
      <BestSellers />
      <UniqueBasket />
      <Materials />
      <CorkBaskets />
      <CustomerFeedback />
      <FamilyCompany showButton={true} />
      <FAQ />
    </div>
  );
}
