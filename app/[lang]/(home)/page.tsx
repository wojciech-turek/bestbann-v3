import { Locale } from "@/dictionaries";
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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col gap-20 sm:gap-40 overflow-x-hidden">
      <Hero lang={lang} />
      <WeMakeBannetons lang={lang} />
      <OurProducts lang={lang} />
      <BenefitsBannetons lang={lang} />
      <BestSellers lang={lang} />
      <UniqueBasket lang={lang} />
      <Materials lang={lang} />
      <CorkBaskets lang={lang} />
      <CustomerFeedback lang={lang} />
      <FamilyCompany lang={lang} showButton={true} />
      <FAQ lang={lang} />
    </div>
  );
}
