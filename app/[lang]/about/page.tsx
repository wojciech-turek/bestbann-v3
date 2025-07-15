import WelcomeText from "./components/WelcomeText";

const AboutUsPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  return (
    <div className="flex flex-col gap-40 bg-beige-3">
      <WelcomeText lang={lang} />
    </div>
  );
};

export default AboutUsPage;
