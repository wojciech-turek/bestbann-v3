import { Link } from "@/i18n/navigation";
import { productsCatalog } from "@/lib/products-catalog";
import { getOgImage, ogImages } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Fragment } from "react";

import DecoText from "@/components/shared/DecoText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { Button } from "@/components/ui/button";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("products.title"),
    description: t("products.description"),
    alternates: { canonical: "/en/products" },
    openGraph: { images: [getOgImage(ogImages.products)] },
  };
}

const VARIANT_COLUMN_CLASSES = [
  "sm:pr-3.5",
  "sm:border-l sm:border-brown-10 sm:px-3.5",
  "sm:pr-3.5 xl:border-l xl:border-brown-10 xl:pl-3.5",
  "sm:border-l sm:border-brown-10 sm:pl-3.5",
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const ProductsPage = async ({ params }: ProductsPageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="bg-beige-1 px-4 pb-16 pt-8 sm:px-9 sm:pb-28 sm:pt-10">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-14 sm:gap-20">
        {/* Hero */}
        <section className="relative rounded-[42px] px-5 pb-12 pt-7 sm:px-10 sm:pb-16 sm:pt-10 lg:px-16">
          <div className="pointer-events-none absolute left-4 top-20 hidden sm:block">
            <Image
              src="/deco/star-orange.svg"
              alt=""
              width={86}
              height={86}
              className="opacity-70"
            />
          </div>
          <div className="pointer-events-none absolute -right-12 top-40 hidden sm:block">
            <Image
              src="/deco/bean-gray-bordered.svg"
              alt=""
              width={188}
              height={138}
              className="opacity-80 scale-x-[-1]"
            />
          </div>

          <div className="mx-auto mt-10 max-w-[1084px] text-center">
            <TypographyH1 className="pb-0 text-[46px] font-medium leading-[1.05] text-brown-100 sm:text-[62px]">
              {t("ProductsPage.hero.title")}
            </TypographyH1>

            <div className="mx-auto mt-4 flex justify-center">
              <Image
                src="/deco/best-quality-half.png"
                alt=""
                width={60}
                height={30}
                className="opacity-90"
              />
            </div>

            <p className="mx-auto mt-5 max-w-[1084px] text-[24px] leading-[1.18] tracking-[-0.01em] text-brown-100 sm:text-[40px] sm:leading-[1.1] sm:tracking-[-0.03em]">
              {t.rich("ProductsPage.hero.description", {
                deco: (chunks) => <DecoText>{chunks}</DecoText>,
              })}
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <div className="space-y-14 sm:space-y-20">
          {productsCatalog.products.map((product) => {
            const variantRows = chunkArray(product.variants, 4);

            return (
              <section key={product.slug} className="space-y-5 sm:space-y-7">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[28px] font-medium leading-[1.08] tracking-[-0.02em] text-brown-100 sm:text-[40px] xl:text-[54px]">
                    {t(`${product.translationKey}.title`)}
                  </h2>
                  <Link
                    href={{
                      pathname: "/products/[product]",
                      params: { product: product.slug },
                    }}
                  >
                    <Button
                      variant="outline"
                      className="shrink-0 rounded-full border-brown-100 px-6 text-brown-100 hover:bg-brown-10 sm:px-12"
                    >
                      {t("ProductsPage.actions.learnMore")}
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-7">
                  {variantRows.map((row, rowIndex) => (
                    <Fragment key={rowIndex}>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-7 xl:grid-cols-4">
                        {row.map((variant, colIndex) => (
                          <article
                            key={`${product.slug}-${variant.slug}`}
                            className={cn(
                              VARIANT_COLUMN_CLASSES[colIndex] || "",
                            )}
                          >
                            <div className="relative overflow-hidden rounded-[14px] bg-beige-2">
                              {variant.isBestseller && (
                                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium text-orange-100">
                                  {t("ProductsPage.labels.bestseller")}
                                </span>
                              )}
                              <Image
                                src={variant.image}
                                alt={`${t(`${product.translationKey}.title`)} ${t(variant.translationKey)}`}
                                width={800}
                                height={520}
                                className="h-48 w-full object-cover sm:h-56"
                              />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-brown-100">
                              {t(variant.translationKey)}
                            </h3>
                            <Link
                              href={{
                                pathname: "/products/[product]",
                                params: { product: product.slug },
                              }}
                            >
                              <Button size="lg" className="mt-5 w-full">
                                {t("Buttons.priceButton")}{" "}
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </Link>
                          </article>
                        ))}
                      </div>
                      {rowIndex < variantRows.length - 1 && (
                        <div className="h-px w-full bg-brown-10" />
                      )}
                    </Fragment>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
