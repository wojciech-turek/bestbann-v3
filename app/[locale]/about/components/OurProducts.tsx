import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurProducts = () => {
  const t = useTranslations("AboutPage.ourProducts");
  const buttonsT = useTranslations("Buttons");
  return (
    <div className="relative flex flex-col gap-7 overflow-hidden rounded-2xl bg-beige-3 p-10 py-30">
      <Image
        src="/deco/bean-gray-transparent.svg"
        alt="deco"
        width={100}
        height={100}
        className="absolute left-1/12 rotate-90 top-10"
      />
      <Image
        src="/deco/bean-orange.svg"
        alt="deco"
        width={280}
        height={320}
        className="absolute right-12 -top-32 scale-x-[-1]"
      />
      <TypographyH2 className="relative text-center">
        {t.rich("title", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
        })}
      </TypographyH2>
      <TypographyP className="relative mx-auto max-w-[68ch] text-center text-lg">
        {t("description")}
      </TypographyP>

      <div className="relative mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 h-[600px] mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src="/imgs/baskets/cork/cork-rectangular.png"
              alt="Our Product"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Link
              href="/products"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
                <Button
                  size="lg"
                  className="text-brown-100 hover:text-brown-100 text-base font-semibold"
                  variant="outline"
                >
                  {buttonsT("viewCatalog")}
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
