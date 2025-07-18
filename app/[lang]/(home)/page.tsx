import BenefitsBannetons from "./components/BenefitsBannetons";
import BestSellers from "./components/BestSellers";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import UniqueBasket from "./components/UniqueBasket";
import WeMakeBannetons from "./components/WeMakeBannetons";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <div className="flex flex-col gap-20 sm:gap-40">
      <Hero lang={lang} />
      <WeMakeBannetons lang={lang} />
      <OurProducts lang={lang} />
      <BenefitsBannetons lang={lang} />
      <BestSellers lang={lang} />
      <UniqueBasket lang={lang} />
      {/*
     
      <UniqueBasket lang={lang} />
      <Materials lang={lang} />
      <CorkBaskets lang={lang} />
      <CustomerFeedback lang={lang} />
      <FamilyCompany lang={lang} />
      <FAQ lang={lang} />
      <QuestionsBox lang={lang} />
      <BannetonsLargeText /> */}
    </div>
  );
}
