import Hero from "./components/Hero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="flex flex-col gap-40">
      <Hero lang={lang} />
      {/* <WeMakeBannetons lang={lang} />
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
      <BannetonsLargeText /> */}
    </div>
  );
}
