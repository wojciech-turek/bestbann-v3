import DecoText from "@/components/shared/DecoText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { TypographyP } from "@/components/shared/TypographyP";
import { useTranslations } from "next-intl";
import Image from "next/image";

const WelcomeText = () => {
  const t = useTranslations("AboutPage.welcome");
  return (
    <div className="pt-40 flex flex-col gap-7 items-center">
      <TypographyH1 className="">
        {t.rich("title", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
          br: () => <br />,
        })}
      </TypographyH1>
      <TypographyP className="text-xl max-w-[50ch] text-center">
        {t("description")}
      </TypographyP>
      <div className="relative w-full mx-auto h-[60vh] rounded-3xl overflow-hidden">
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
