import DecoText from "@/components/shared/DecoText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { TypographyP } from "@/components/shared/TypographyP";
import { useTranslations } from "next-intl";
import Image from "next/image";

const WelcomeText = () => {
  const t = useTranslations("AboutPage.welcome");
  return (
    <div className="pt-20 sm:pt-28 md:pt-40 flex flex-col gap-5 sm:gap-7 items-center bg-beige-2 px-4 sm:px-9">
      <TypographyH1 className="">
        {t.rich("title", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
          br: () => <br />,
        })}
      </TypographyH1>
      <TypographyP className="text-xl max-w-[50ch] text-center">
        {t("description")}
      </TypographyP>
      <div className="relative w-full mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-xl sm:rounded-3xl overflow-hidden">
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
