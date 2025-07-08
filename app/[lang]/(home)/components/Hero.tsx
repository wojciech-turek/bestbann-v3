import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { ArrowRightIcon } from "lucide-react";
import LazyHeroVideo from "./LazyHeroVideo";

const Hero = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  return (
    <div className="flex relative items-end z-10 justify-between min-h-screen p-8 pb-20 bg-[url('/imgs/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute z-20 inset-0 bg-[#552D1733]" />
      <main className="flex z-30 flex-col basis-1/2 ">
        <h1 className="text-white text-5xl 2xl:text-6xl tracking-tight font-medium leading-[50px] 2xl:leading-[70px]">
          <RichText>{dict.home.hero.slogan}</RichText>
        </h1>
        <p className="text-white text-xl max-w-[30ch] mt-7">
          {dict.home.hero.description}
        </p>
        <Button
          size="lg"
          className="bg-white hover:bg-white/90 text-black px-24 py-6 mt-10 w-fit"
        >
          View our products <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </main>
      <LazyHeroVideo />
    </div>
  );
};

export default Hero;
