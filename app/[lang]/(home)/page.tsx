import BenefitsBannetons from "./components/BenefitsBannetons";
import BestSellers from "./components/BestSellers";
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
    </div>
  );
}
