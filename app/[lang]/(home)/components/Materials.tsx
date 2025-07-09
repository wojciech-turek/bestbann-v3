import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH3 } from "@/components/shared/TypographyH3";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Materials = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto py-12">
      <TypographyH2 className="mb-12 text-left">
        <RichText>{dict.home.materials.title}</RichText>
      </TypographyH2>

      <div className="flex items-center gap-20 ">
        <div className="basis-1/2 px-32 py-20 bg-beige-2 rounded-[120px]">
          <Image
            src="/imgs/home/certificate.png"
            alt="SGS Certificate"
            width={500}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="basis-1/2 max-w-[50ch] mx-auto">
          <TypographyH3 className="text-4xl">
            {dict.home.materials.sections.sgh.title}
          </TypographyH3>
          <TypographyP className="mt-4 text-lg">
            <RichText>{dict.home.materials.sections.sgh.description}</RichText>
          </TypographyP>
          <ul className="mt-4 list-outside list-disc space-y-8 pl-5 text-brown-100 max-w-[60ch]">
            {Object.values(dict.home.materials.sections.sgh.regulations).map(
              (regulation) => (
                <li key={regulation}>{regulation}</li>
              )
            )}
          </ul>
          <a href="/imgs/home/certificate.png" download="certificate.png">
            <Button size="lg" className="mt-12">
              {dict.buttons.downloadCertificate}{" "}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="my-16 flex items-center justify-center gap-4">
        <div className="h-px flex-grow bg-gray-300"></div>
        <Image
          src="/deco/best-quality.png"
          alt="Best Quality"
          width={100}
          height={100}
        />
        <div className="h-px flex-grow bg-gray-300"></div>
      </div>

      <div className="flex items-center justify-between gap-20">
        <div className="text-left max-w-[40ch] basis-1/2 mx-auto">
          <TypographyH3 className="text-4xl">
            {dict.home.materials.sections.natural.title}
          </TypographyH3>
          <TypographyP className="mt-4">
            <RichText>
              {dict.home.materials.sections.natural.description}
            </RichText>
          </TypographyP>
          <Button size="lg" className="mt-12">
            {dict.buttons.buyRattanBaskets} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <Image
          src="/imgs/home/rattan-material.jpg"
          alt="Natural rattan material"
          width={648}
          height={432}
          className="shadow-lg scale-x-[-1] rounded-[120px] h-[432px] object-cover"
        />
      </div>
    </div>
  );
};

export default Materials;
