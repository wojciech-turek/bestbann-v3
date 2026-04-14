import DecoText from "@/components/shared/DecoText";
import { TypographyH3 } from "@/components/shared/TypographyH3";
import { TypographyP } from "@/components/shared/TypographyP";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Quote = () => {
  const t = useTranslations("AboutPage.welcome");

  return (
    <div className="relative flex flex-col gap-7 items-center sm:max-w-1/2 mx-auto px-4 sm:px-0">
      <Image
        src="/deco/quotes.svg"
        alt="Quotes decoration"
        width={120}
        height={90}
        className="absolute -top-6 sm:-top-10 -left-4 sm:-left-20 z-0 w-16 h-12 sm:w-[120px] sm:h-[90px]"
      />
      <TypographyH3 className="relative z-10 text-xl sm:text-[28px] md:text-[40px] leading-snug sm:leading-[32px] md:leading-[40px] text-center">
        {t("quote1")}
        <Image
          src="/imgs/baskets/engraved/engraved.jpg"
          alt="Quote"
          width={40}
          height={40}
          className="inline-block rounded-full aspect-square object-cover mx-2"
        />
        {t("quote2")}
        <Image
          src="/imgs/home/rattan-material.jpg"
          alt="Quote"
          width={40}
          height={40}
          className="inline-block rounded-full aspect-square object-cover mx-2"
        />
        {t.rich("quote3", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
        })}
      </TypographyH3>

      <TypographyP className="relative z-10 font-medium">
        - Weronika & Michal
      </TypographyP>
    </div>
  );
};

export default Quote;
