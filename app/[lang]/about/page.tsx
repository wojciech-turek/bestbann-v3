import WelcomeText from "./components/WelcomeText";

const AboutUsPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  return (
    <div className="flex flex-col gap-40 bg-beige-3">
      <WelcomeText lang={lang} />
    </div>
  );
};

export default AboutUsPage;
