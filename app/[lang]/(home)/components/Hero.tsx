import RichText from "@/components/RichText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRightIcon } from "lucide-react";
import LazyHeroVideo from "./LazyHeroVideo";

const Hero = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="relative flex flex-col sm:flex-row justify-end sm:justify-between items-center sm:items-end gap-8 sm:gap-0 z-10 min-h-[120vh] sm:min-h-screen p-4 sm:p-8 pb-8 sm:pb-20 bg-[url('/imgs/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute z-20 inset-0 bg-[#552d176e]" />
      <main className="flex z-30 flex-col sm:basis-1/2 ">
        <TypographyH1 className="text-white text-left">
          <RichText>{dict.home.hero.slogan}</RichText>
        </TypographyH1>
        <p className="text-white text-xl sm:max-w-[30ch] mt-7">
          {dict.home.hero.description}
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-white/90 text-black px-24 py-6 mt-10 w-full sm:w-fit"
        >
          View our products <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </main>
      <LazyHeroVideo />
    </div>
  );
};

export default Hero;
