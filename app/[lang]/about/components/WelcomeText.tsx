import RichText from "@/components/RichText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";

const WelcomeText = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="pt-40 flex flex-col gap-7 items-center">
      <TypographyH1 className="">
        <RichText>{dict.about.welcome.title}</RichText>
      </TypographyH1>
      <TypographyP className="text-xl w-[50ch] text-center">
        {dict.about.welcome.description}
      </TypographyP>
    </div>
  );
};

export default WelcomeText;
