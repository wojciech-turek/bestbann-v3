import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { getDictionary } from "@/dictionaries";

const TakingCare = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="">
      <TypographyH2 className="text-center">
        <RichText>{dict.about.takingCare.title}</RichText>
      </TypographyH2>
    </div>
  );
};

export default TakingCare;
