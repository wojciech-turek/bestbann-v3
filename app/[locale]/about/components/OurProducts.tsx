import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const productCategories = [
  { name: "Rattan", src: "/imgs/products/rattan/cover.png" },
  { name: "Cork", src: "/imgs/products/cork/cover.png" },
  { name: "Bamboo", src: "/imgs/products/bamboo/cover.png" },
  { name: "Polypropylene", src: "/imgs/products/plastic/cover.png" },
  { name: "Engraved", src: "/imgs/products/engraved/cover.png" },
  { name: "Liners", src: "/imgs/products/liners/cover.png" },
];

const circleImages = [
  {
    src: "/imgs/our-products/linen-baskets.png",
    alt: "Linen covered bread proofing baskets",
    left: "-10%",
    top: "25.5%",
    size: "40.8%",
  },
  {
    src: "/imgs/our-products/baskets-with-liners.png",
    alt: "Bread baskets with cotton liners",
    left: "34%",
    top: "0%",
    size: "20.2%",
  },
  {
    src: "/imgs/our-products/small-round-basket.png",
    alt: "Small round banneton basket",
    left: "59.3%",
    top: "28.7%",
    size: "19.25%",
  },
  {
    src: "/imgs/our-products/round-banneton.png",
    alt: "Round rattan banneton close-up",
    left: "80.3%",
    top: "34.9%",
    size: "29.7%",
  },
  {
    src: "/imgs/our-products/engraved-bannetons.png",
    alt: "Engraved bread proofing baskets",
    left: "38.1%",
    top: "62%",
    size: "23.5%",
  },
];

const OurProducts = () => {
  const t = useTranslations("AboutPage.ourProducts");
  const buttonsT = useTranslations("Buttons");
  return (
    <div className="relative flex flex-col gap-5 md:gap-11 sm:rounded-2xl bg-beige-3 px-4 sm:px-10 pt-11 md:pt-30 pb-10 max-w-7xl mx-auto sm:w-full overflow-hidden">
      <Image
        src="/deco/bean-gray-transparent.svg"
        alt=""
        width={100}
        height={100}
        className="absolute left-1/12 rotate-90 top-2 md:top-10"
      />
      <Image
        src="/deco/bean-orange.svg"
        alt=""
        width={280}
        height={320}
        className="absolute right-0 md:right-12 -top-20 md:-top-32 scale-x-[-1] w-[170px] md:w-[280px]"
      />
      <TypographyH2 className="relative text-center">
        {t.rich("title", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
        })}
      </TypographyH2>
      <TypographyP className="relative mx-auto max-w-[68ch] md:text-center text-left text-base md:text-lg">
        {t("description")}
      </TypographyP>

      {/* Mobile: Category grid */}
      <div className="md:hidden grid grid-cols-2 gap-2 w-full mt-2">
        {productCategories.map((cat) => (
          <div
            key={cat.name}
            className="relative aspect-square rounded-lg border border-brown-20 overflow-hidden"
          >
            <Image
              src={cat.src}
              alt={cat.name}
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-100/40 to-transparent" />
            <span className="absolute bottom-2.5 left-2.5 text-white font-semibold text-lg leading-6">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: View All Products button */}
      <Button
        asChild
        size="lg"
        className="md:hidden w-full h-[60px] text-base font-semibold"
      >
        <Link href="/products">
          {buttonsT("viewCatalog")}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>

      {/* Desktop: Circular collage */}
      <div
        className="relative w-full mt-8 hidden md:block"
        style={{ aspectRatio: "1675 / 679" }}
      >
        {circleImages.map((img, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden"
            style={{
              left: img.left,
              top: img.top,
              width: img.size,
              paddingBottom: img.size,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 30vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
