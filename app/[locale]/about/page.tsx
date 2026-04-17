import { getOgImage, ogImages } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FamilyCompany from "../(home)/components/FamilyCompany";
import BakersFamily from "./components/BakersFamily";
import OurProducts from "./components/OurProducts";
import Quote from "./components/Quote";
import TakingCare from "./components/TakingCare";
import WelcomeText from "./components/WelcomeText";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about.title"),
    description: t("about.description"),
    alternates: { canonical: "/en/about" },
    openGraph: { images: [getOgImage(ogImages.about)] },
  };
}

const AboutUsPage = async () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 md:gap-40 bg-beige-1">
      <WelcomeText />
      <Quote />
      <FamilyCompany showButton={false} />
      <OurProducts />
      <TakingCare />
      <BakersFamily />
    </div>
  );
};

export default AboutUsPage;
