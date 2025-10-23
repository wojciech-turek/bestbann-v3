import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FAQAccordion } from "./FAQAccordion";

const FAQ = () => {
  const t = useTranslations("HomePage.faq");
  return (
    <div className="container mx-auto flex flex-col sm:flex-row px-4">
      <div className="basis-2/5 relative">
        <TypographyH2 className="text-left">
          {t.rich("title", {
            deco: (chunks) => <DecoText>{chunks}</DecoText>,
          })}
        </TypographyH2>
        <Image
          src="/deco/star-orange.svg"
          alt="FAQ"
          width={138}
          height={138}
          className="block sm:absolute top-1/2 left-0 scale-75 sm:scale-100"
        />
      </div>
      <div className="basis-1/2">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQ;
