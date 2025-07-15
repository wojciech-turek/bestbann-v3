import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH4 } from "@/components/shared/TypographyH4";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurProducts = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  const products = [
    {
      title: dict.home.ourProducts.products.rattan.title,
      description: dict.home.ourProducts.products.rattan.description,
      src: "/imgs/home/rattan.png",
    },
    {
      title: dict.home.ourProducts.products.cork.title,
      description: dict.home.ourProducts.products.cork.description,
      src: "/imgs/home/cork.png",
    },
    {
      title: dict.home.ourProducts.products.bamboo.title,
      description: dict.home.ourProducts.products.bamboo.description,
      src: "/imgs/home/bamboo.png",
    },
    {
      title: dict.home.ourProducts.products.platic.title,
      description: dict.home.ourProducts.products.platic.description,
      src: "/imgs/home/plastic.png",
    },
    {
      title: dict.home.ourProducts.products.engraved.title,
      description: dict.home.ourProducts.products.engraved.description,
      src: "/imgs/home/engraved.png",
    },
    {
      title: dict.home.ourProducts.products.liners.title,
      description: dict.home.ourProducts.products.liners.description,
      src: "/imgs/home/liners.png",
    },
  ];
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col sm:flex-row container mx-auto items-center justify-between gap-5 px-4 sm:px-9">
        <TypographyH2>{dict.home.ourProducts.title}</TypographyH2>
        <Button size="lg" className="w-full sm:w-fit">
          {dict.buttons.viewCatalog} <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 container mx-auto">
        {products.map((product, i) => {
          const isLastInRow = (i + 1) % 3 === 0;
          const isLastRow = i >= products.length - 3;
          return (
            <div
              key={product.title}
              className={clsx(
                "relative group flex flex-col bg-beige-2 px-9 py-12",
                {
                  "border-r border-beige-1": !isLastInRow,
                  "border-b border-beige-1": !isLastRow,
                }
              )}
            >
              <Image
                src={product.src}
                alt={product.title}
                width={384}
                height={288}
                className="object-cover object-center mx-auto"
              />
              <TypographyH4>{product.title}</TypographyH4>
              <TypographyP>{product.description}</TypographyP>

              <Link
                href="#"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
                  <Button
                    size="lg"
                    className="text-brown-100 hover:text-brown-100 text-base font-semibold"
                    variant="outline"
                  >
                    {dict.buttons.viewCatalog}
                  </Button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
