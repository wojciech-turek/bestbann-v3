import FamilyCompany from "../(home)/components/FamilyCompany";
import OurProducts from "./components/OurProducts";
import Quote from "./components/Quote";
import TakingCare from "./components/TakingCare";
import WelcomeText from "./components/WelcomeText";

const AboutUsPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  return (
    <div className="flex flex-col gap-40 bg-beige-1 px-9">
      <WelcomeText lang={lang} />
      <Quote lang={lang} />
      <FamilyCompany lang={lang} showButton={false} />
      <OurProducts lang={lang} />
      <TakingCare lang={lang} />
    </div>
  );
};

export default AboutUsPage;
