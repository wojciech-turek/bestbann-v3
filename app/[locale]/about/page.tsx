import FamilyCompany from "../(home)/components/FamilyCompany";
import BakersFamily from "./components/BakersFamily";
import OurProducts from "./components/OurProducts";
import Quote from "./components/Quote";
import TakingCare from "./components/TakingCare";
import WelcomeText from "./components/WelcomeText";

const AboutUsPage = async () => {
  return (
    <div className="flex flex-col gap-40 bg-beige-1 px-9">
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
