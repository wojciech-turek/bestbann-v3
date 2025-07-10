import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import RichText from "./RichText";
import { TypographyH2 } from "./shared/TypographyH2";
import { TypographyP } from "./shared/TypographyP";
import { Button } from "./ui/button";

const QuestionsBox = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  const wavyStyle = {
    backgroundColor: "#F2E8E0",
    maskImage: 'url("/wavy-mask.svg")',
    maskSize: "contain",
    maskPosition: "center",
    maskRepeat: "no-repeat",
    WebkitMaskImage: 'url("/wavy-mask.svg")',
    WebkitMaskSize: "contain",
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
  };

  return (
    <div className="container mx-auto py-10">
      <div className="relative h-[473px] w-full">
        <div
          style={wavyStyle}
          className="absolute inset-0 -z-10 h-full w-full"
        />
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-center">
            <div className="relative h-full flex-1">
              <Image
                src="/imgs/baskets/cork/cork-bio-single.png"
                alt="Cork bio basket"
                width={208}
                height={116}
                className="absolute right-8 -top-6"
              />
              <Image
                src="/imgs/baskets/bamboo/bambo-single.png"
                alt="Bamboo basket"
                width={163}
                height={160}
                className="absolute bottom-12 right-1/6"
              />
            </div>
            <div className="z-10 flex flex-col items-center justify-center gap-6">
              <TypographyH2>
                <RichText>{dict.questionsBox.title}</RichText>
              </TypographyH2>
              <TypographyP className="max-w-[60ch] text-center">
                <RichText>{dict.questionsBox.description}</RichText>
              </TypographyP>
              <Button size="lg" className="mt-4">
                {dict.buttons.leaveRequest} <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="relative h-full flex-1">
              <Image
                src="/imgs/baskets/rattan/round-rattan-single.png"
                alt="Rattan basket"
                width={171}
                height={160}
                className="absolute -top-4 left-1/4"
              />
              <Image
                src="/imgs/baskets/cork/cork-single.png"
                alt="Cork basket"
                width={183}
                height={128}
                className="absolute -bottom-4 left-1/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsBox;
