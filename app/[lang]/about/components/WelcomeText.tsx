import RichText from "@/components/RichText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

const WelcomeText = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="pt-40 flex flex-col gap-7 items-center">
      <TypographyH1 className="">
        <RichText>{dict.pages.about.welcome.title}</RichText>
      </TypographyH1>
      <TypographyP className="text-xl max-w-[50ch] text-center">
        {dict.pages.about.welcome.description}
      </TypographyP>
      <div className="relative w-full mx-auto h-[80vh] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[#552d176e]" />
        <Image
          src="/imgs/hero-image.jpg"
          alt="About us"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomeText;
