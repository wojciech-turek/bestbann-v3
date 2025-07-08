import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

const WeMakeBannetons = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="flex items-center justify-center flex-col gap-7 relative">
      <Image
        src="/deco/bean-orange.svg"
        alt="deco"
        width={185}
        height={195}
        className="absolute -top-16 left-8 -z-[1] rotate-65"
      />
      <Image
        src="/deco/bean-gray-bordered.svg"
        alt="deco"
        width={350}
        height={350}
        className="absolute -bottom-16 -right-12 -z-[1] rotate-12 flip scale-x-[-1]"
      />
      <Image
        src="/deco/best-quality-half.png"
        alt="bannetons"
        width={82}
        height={42}
      />
      <TypographyH2>
        <RichText>{dict.home.weMakeBannetons.title}</RichText>
      </TypographyH2>
      <TypographyP className="text-lg max-w-[42ch] text-center">
        {dict.home.weMakeBannetons.description}
      </TypographyP>
    </div>
  );
};

export default WeMakeBannetons;
