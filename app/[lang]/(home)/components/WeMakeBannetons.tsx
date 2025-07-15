import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";

const WeMakeBannetons = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="relative my-20 sm:my-0">
      <Image
        src="/deco/bean-orange.svg"
        alt="deco"
        width={185}
        height={195}
        className="absolute -top-16 -left-12 sm:left-8 -z-[1] rotate-90 sm:rotate-65 w-[110px] sm:w-[185px]"
      />
      <Image
        src="/deco/bean-gray-bordered.svg"
        alt="deco"
        width={350}
        height={350}
        className="absolute -bottom-20 sm:-bottom-16 -right-6 sm:-right-12 -z-[1] rotate-12 flip scale-x-[-1] w-[126px] sm:w-[185px]"
      />

      <div className="flex items-center justify-center flex-col gap-4 sm:gap- px-4 sm:px-0">
        <Image
          src="/deco/best-quality-half.png"
          alt="bannetons"
          width={82}
          height={42}
        />
        <TypographyH2 className="sm:max-w-[20ch]">
          <RichText>{dict.home.weMakeBannetons.title}</RichText>
        </TypographyH2>
        <TypographyP className="sm:text-lg sm:max-w-[42ch] text-center">
          {dict.home.weMakeBannetons.description}
        </TypographyP>
      </div>
    </div>
  );
};

export default WeMakeBannetons;
