import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";
import { FAQAccordion } from "./FAQAccordion";

const FAQ = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto flex flex-col sm:flex-row px-4">
      <div className="basis-2/5 relative">
        <TypographyH2 className="text-left">
          <RichText>{dict.home.faq.title}</RichText>
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
        <FAQAccordion dict={dict} />
      </div>
    </div>
  );
};

export default FAQ;
