import QuestionsBox from "@/components/QuestionsBox";
import BannetonsLargeText from "./components/BannetonsLargeText";
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
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="flex flex-col gap-40">
      <Hero lang={lang} />
      <WeMakeBannetons lang={lang} />
      <OurProducts lang={lang} />
      <BenefitsBannetons lang={lang} />
      <BestSellers lang={lang} />
      <UniqueBasket lang={lang} />
      <Materials lang={lang} />
      <CorkBaskets lang={lang} />
      <CustomerFeedback lang={lang} />
      <FamilyCompany lang={lang} />
      <FAQ lang={lang} />
      <QuestionsBox lang={lang} />
      <BannetonsLargeText />
    </div>
  );
}
