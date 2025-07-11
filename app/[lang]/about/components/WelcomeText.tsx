import { TypographyH1 } from "@/components/shared/TypographyH1";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";

const WelcomeText = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div>
      <TypographyH1>{dict.about.welcome.title}</TypographyH1>
      <TypographyP className="text-xl">
        {dict.about.welcome.description}
      </TypographyP>
    </div>
  );
};

export default WelcomeText;
