import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH4 } from "@/components/shared/TypographyH4";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { productsCatalog } from "@/lib/products-catalog";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurProducts = () => {
  const t = useTranslations("HomePage.ourProducts");
  const tButtons = useTranslations("Buttons");

  const products = productsCatalog.products.map((product) => ({
    href: product.href as
      | "/products/rattan"
      | "/products/cork"
      | "/products/bamboo"
      | "/products/plastic"
      | "/products/engraved"
      | "/products/liners",
    title: t(`${product.homeProductKey}.title`),
    description: t(`${product.homeProductKey}.description`),
    src: product.coverImage,
  }));
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col sm:flex-row container mx-auto items-center justify-between gap-5 px-4 sm:px-9">
        <TypographyH2>{t("title")}</TypographyH2>
        <Button size="lg" className="w-full sm:w-fit">
          {tButtons("viewCatalog")} <ArrowRight className="w-4 h-4" />
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
                href={product.href}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium">
                  <Button
                    size="lg"
                    className="text-brown-100 hover:text-brown-100 text-base font-semibold"
                    variant="outline"
                  >
                    {tButtons("viewCatalog")}
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
