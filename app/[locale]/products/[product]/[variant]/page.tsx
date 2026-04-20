import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/navigation";
import {
  getVariantBySlug,
  productsCatalog,
} from "@/lib/products-catalog";
import { BASE_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { getVariantDetails } from "@/data/variant-details";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type VariantPageProps = {
  params: Promise<{ locale: string; product: string; variant: string }>;
};

export function generateStaticParams() {
  const params: { product: string; variant: string }[] = [];
  for (const product of productsCatalog.products) {
    for (const variant of product.variants) {
      if (variant.hasVariantPage) {
        params.push({ product: product.slug, variant: variant.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: VariantPageProps): Promise<Metadata> {
  const { locale, product: productSlug, variant: variantSlug } = await params;
  const result = getVariantBySlug(productSlug, variantSlug);
  if (!result) return {};

  const { product, variant } = result;
  const t = await getTranslations({ locale });
  const productTitle = t(`${product.translationKey}.title`);
  const variantName = t(variant.translationKey);
  const title = `${variantName} ${productTitle}`;

  return {
    title,
    description: t(
      `VariantDetailPage.products.${product.slug}.variants.${variant.slug === "mini-round" ? "miniRound" : variant.slug === "big-sliced-bread" ? "bigSlicedBread" : variant.slug === "engraved-bottom" ? "engravedBottom" : variant.slug}.description`,
    ),
    alternates: {
      canonical: `/en/products/${product.slug}/${variant.slug}`,
    },
    openGraph: {
      images: [{ url: variant.image, width: 800, height: 520 }],
    },
  };
}

function getTranslationVariantKey(slug: string): string {
  const map: Record<string, string> = {
    "mini-round": "miniRound",
    "big-sliced-bread": "bigSlicedBread",
    "engraved-bottom": "engravedBottom",
  };
  return map[slug] ?? slug;
}

function getRecommendations(
  currentProductSlug: string,
  currentVariantSlug: string,
) {
  const recommendations: {
    productSlug: string;
    variant: (typeof productsCatalog.products)[number]["variants"][number];
    productTranslationKey: string;
  }[] = [];

  for (const product of productsCatalog.products) {
    for (const variant of product.variants) {
      if (
        product.slug === currentProductSlug &&
        variant.slug === currentVariantSlug
      )
        continue;
      if (!variant.hasVariantPage) continue;
      recommendations.push({
        productSlug: product.slug,
        variant,
        productTranslationKey: product.translationKey,
      });
    }
  }

  // Shuffle and take 4
  const shuffled = recommendations.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

const VariantPage = async ({ params }: VariantPageProps) => {
  const { locale, product: productSlug, variant: variantSlug } = await params;
  const t = await getTranslations({ locale });
  const result = getVariantBySlug(productSlug, variantSlug);

  if (!result || !result.variant.hasVariantPage) {
    notFound();
  }

  const { product, variant } = result;
  const details = getVariantDetails(productSlug, variantSlug);
  const productTitle = t(`${product.translationKey}.title`);
  const variantName = t(variant.translationKey);
  const fullTitle = `${variantName} ${productTitle}`;
  const variantKey = getTranslationVariantKey(variantSlug);
  const description = t(
    `VariantDetailPage.products.${product.slug}.variants.${variantKey}.description`,
  );

  const recommendations = getRecommendations(productSlug, variantSlug);

  const accordionItems = [
    "innovativeProduct",
    "safetyConfirmed",
    "internationalCooperation",
    "versatility",
    "environmentalFriendliness",
  ] as const;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: fullTitle,
    description,
    image: `${BASE_URL}${variant.image}`,
    brand: { "@type": "Brand", name: "BestBann" },
    manufacturer: {
      "@type": "Organization",
      name: "BestBann",
      url: BASE_URL,
    },
  };

  return (
    <div className="bg-beige-1 px-4 pb-16 pt-4 sm:px-9 sm:pb-24 sm:pt-6">
      <JsonLd data={productJsonLd} />
      <div className="mx-auto w-full max-w-[1480px] space-y-10 sm:space-y-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-brown-60">
          <Link href="/" className="hover:text-brown-100">
            {t("ProductsPage.breadcrumb.home")}
          </Link>
          <span className="mx-2 text-brown-20">/</span>
          <Link href="/products" className="hover:text-brown-100">
            {t("ProductsPage.breadcrumb.products")}
          </Link>
          <span className="mx-2 text-brown-20">/</span>
          <Link
            href={{
              pathname: "/products/[product]",
              params: { product: product.slug },
            }}
            className="hover:text-brown-100"
          >
            {productTitle}
          </Link>
          <span className="mx-2 text-brown-20">/</span>
          <span className="text-brown-100">{variantName}</span>
        </nav>

        {/* Main content: Image + Details */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-11">
          {/* Left: Image gallery */}
          <div className="flex gap-5 lg:shrink-0">
            {/* Thumbnails */}
            <div className="hidden flex-col gap-4 sm:flex">
              <button
                type="button"
                className="h-[100px] w-[100px] overflow-hidden rounded-[18px] bg-white ring-2 ring-orange-100 ring-offset-2"
              >
                <Image
                  src={variant.image}
                  alt={fullTitle}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </button>
              <div className="h-[100px] w-[100px] overflow-hidden rounded-[18px] bg-white">
                <Image
                  src={product.coverImage}
                  alt={productTitle}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Main image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] bg-beige-2 sm:h-[500px] sm:w-[500px] lg:h-[560px] lg:w-[560px]">
              <Image
                src={variant.image}
                alt={fullTitle}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              {variant.isBestseller && (
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-orange-100">
                  {t("ProductsPage.labels.bestseller")}
                </span>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-1 flex-col gap-10 lg:gap-14">
            {/* Title + description */}
            <div className="space-y-5">
              <h1 className="text-[36px] font-medium leading-[1.02] tracking-[-0.02em] text-brown-100 sm:text-[56px]">
                {fullTitle}
              </h1>
              <p className="max-w-[60ch] text-lg leading-7 text-brown-80">
                {description}
              </p>
            </div>

            {/* Properties card */}
            {details && details.sizes.length > 0 && (
              <div className="rounded-[18px] border border-brown-20 p-6 sm:p-7">
                <h2 className="text-xl font-medium leading-[30px] text-brown-100">
                  {t("VariantDetailPage.properties.title")}
                </h2>
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-base text-brown-60">
                      {t("VariantDetailPage.properties.doughWeight")}
                    </span>
                    <span className="text-right text-base text-brown-80">
                      {details.sizes[0].doughWeight}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-base text-brown-60">
                      {t("VariantDetailPage.properties.dimensions")}
                    </span>
                    <span className="text-right text-base text-brown-80">
                      {details.sizes[0].dimensions}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-base text-brown-60">
                      {t("VariantDetailPage.properties.catalogNumber")}
                    </span>
                    <span className="text-right text-base text-brown-80">
                      {details.sizes[0].catalogNumber}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* CTA + Sizes list */}
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="h-[48px] rounded-full px-12 sm:h-[52px]"
                  >
                    {t("Buttons.addToQuote")}
                  </Button>
                </Link>
              </div>

              {/* Sizes list */}
              {details && details.sizes.length > 1 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.13em] text-brown-60">
                    {t("VariantDetailPage.sizes.title")}
                  </h3>
                  <div className="space-y-2">
                    {details.sizes.map((size, index) => (
                      <div
                        key={size.catalogNumber}
                        className={cn(
                          "flex items-center justify-between gap-4 rounded-xl border px-4 py-3 text-sm transition-colors",
                          index === 0
                            ? "border-orange-100 bg-orange-100/5 text-brown-100"
                            : "border-brown-10 bg-white text-brown-80 hover:border-brown-20",
                        )}
                      >
                        <span className="font-medium">
                          {size.dimensions}
                        </span>
                        <span className="shrink-0 text-brown-60">
                          {size.catalogNumber}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Accordion section */}
        <section className="mx-auto max-w-[760px]">
          <Accordion type="single" collapsible>
            {accordionItems.map((item) => (
              <AccordionItem
                key={item}
                value={item}
                className="border-brown-10"
              >
                <AccordionTrigger className="py-5 text-xl font-medium text-brown-100 hover:no-underline [&>svg]:size-5 [&>svg]:text-brown-60">
                  {t(`VariantDetailPage.accordion.${item}.title`)}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-7 text-brown-80">
                  {t(`VariantDetailPage.accordion.${item}.body`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* You may also like */}
        <section className="space-y-8 sm:space-y-11">
          <h2 className="text-[36px] font-medium leading-none tracking-[-0.03em] text-brown-100 sm:text-[56px]">
            {t("VariantDetailPage.recommendations.title")}
          </h2>

          <div className="space-y-7">
            <div className="h-px w-full bg-brown-10" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {recommendations.map((rec) => (
                <article
                  key={`${rec.productSlug}-${rec.variant.slug}`}
                  className="flex flex-col gap-5"
                >
                  <div className="space-y-2">
                    <Link
                      href={{
                        pathname: "/products/[product]/[variant]",
                        params: {
                          product: rec.productSlug,
                          variant: rec.variant.slug,
                        },
                      }}
                    >
                      <div className="relative h-[224px] overflow-hidden rounded-[14px] bg-beige-2">
                        {rec.variant.isBestseller && (
                          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2 py-0.5 text-xs font-medium text-orange-100">
                            {t("ProductsPage.labels.bestseller")}
                          </span>
                        )}
                        <Image
                          src={rec.variant.image}
                          alt={`${t(`${rec.productTranslationKey}.title`)} ${t(rec.variant.translationKey)}`}
                          width={800}
                          height={520}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                    </Link>
                    <h3 className="text-lg font-medium leading-7 text-brown-100">
                      {t(`${rec.productTranslationKey}.title`)}
                    </h3>
                    <p className="text-sm text-brown-100">
                      {t(rec.variant.translationKey)}
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: "/products/[product]/[variant]",
                      params: {
                        product: rec.productSlug,
                        variant: rec.variant.slug,
                      },
                    }}
                  >
                    <Button size="lg" className="h-12 w-full rounded-full">
                      {t("Buttons.priceButton")}{" "}
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
            <div className="h-px w-full bg-brown-10" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default VariantPage;
