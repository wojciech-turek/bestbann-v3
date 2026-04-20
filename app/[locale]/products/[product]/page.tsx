import DecoText from "@/components/shared/DecoText";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getProductBySlug, productsCatalog } from "@/lib/products-catalog";
import { BASE_URL } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export function generateStaticParams() {
  return productsCatalog.products.map((product) => ({
    product: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { locale, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return {};

  const t = await getTranslations({ locale });
  const productTitle = t(`${product.translationKey}.title`);
  const productDescription = t(
    `ProductDetailPage.products.${product.slug}.heroDescription`,
  );

  return {
    title: productTitle,
    description: productDescription,
    alternates: { canonical: `/en/products/${product.slug}` },
    openGraph: {
      images: [{ url: product.coverImage, width: 1800, height: 960 }],
    },
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { locale, product: productSlug } = await params;
  const t = await getTranslations({ locale });
  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  const productTitle = t(`${product.translationKey}.title`);
  const productDescription = t(
    `ProductDetailPage.products.${product.slug}.heroDescription`,
  );
  const stageItems = [
    {
      title: t(`ProductDetailPage.products.${product.slug}.stages.step1.title`),
      body: t(`ProductDetailPage.products.${product.slug}.stages.step1.body`),
    },
    {
      title: t(`ProductDetailPage.products.${product.slug}.stages.step2.title`),
      body: t(`ProductDetailPage.products.${product.slug}.stages.step2.body`),
    },
    {
      title: t(`ProductDetailPage.products.${product.slug}.stages.step3.title`),
      body: t(`ProductDetailPage.products.${product.slug}.stages.step3.body`),
    },
  ];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productTitle,
    description: productDescription,
    image: `${BASE_URL}${product.coverImage}`,
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
      <div className="mx-auto w-full max-w-[1480px] space-y-8 sm:space-y-14">
        <section className="relative overflow-hidden rounded-[34px] border border-brown-10">
          <Image
            src={product.coverImage}
            alt={productTitle}
            width={1800}
            height={960}
            className="h-[420px] w-full object-cover sm:h-[560px]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-brown-100/55 via-brown-100/32 to-brown-100/8" />
          <div className="absolute left-4 right-4 top-4 text-sm text-white/90 sm:left-8 sm:right-8 sm:top-7">
            <Link href="/" className="hover:text-white">
              {t("ProductsPage.breadcrumb.home")}
            </Link>
            <span className="mx-2 text-white/70">/</span>
            <Link href="/products" className="hover:text-white">
              {t("ProductsPage.breadcrumb.products")}
            </Link>
            <span className="mx-2 text-white/70">/</span>
            <span>{productTitle}</span>
          </div>

          <div className="absolute bottom-7 left-4 right-4 flex max-w-[680px] flex-col gap-5 text-white sm:bottom-10 sm:left-8 sm:right-8">
            <h1 className="text-[46px] leading-[0.97] tracking-[-0.02em] sm:text-[74px]">
              {productTitle}
            </h1>
            <p className="max-w-[54ch] text-base leading-7 text-white/95 sm:text-[26px] sm:leading-[1.25] sm:tracking-[-0.01em]">
              {productDescription}
            </p>
            <div>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 text-brown-100 sm:h-14 sm:px-12"
                >
                  {t("Buttons.leaveRequest")} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-brown-10 bg-white p-6 sm:p-10">
            <h2 className="text-[38px] leading-[1.02] tracking-[-0.02em] text-brown-100 sm:text-[62px]">
              {t.rich(`ProductDetailPage.products.${product.slug}.introTitle`, {
                deco: (chunks) => <DecoText>{chunks}</DecoText>,
              })}
            </h2>
            <p className="mt-5 max-w-[76ch] text-base leading-7 text-brown-80 sm:text-lg">
              {t(`ProductDetailPage.products.${product.slug}.introDescription`)}
            </p>
          </div>
          <div className="rounded-3xl border border-brown-10 bg-linear-to-br from-beige-2 to-white p-6 sm:p-8">
            <p className="text-sm font-semibold tracking-[0.13em] text-brown-60 uppercase">
              {t("ProductDetailPage.context.title")}
            </p>
            <ul className="mt-5 space-y-3">
              {[1, 2, 3].map((index) => (
                <li
                  key={index}
                  className="rounded-xl border border-brown-10 bg-white/80 px-4 py-3 text-brown-100"
                >
                  {t(
                    `ProductDetailPage.products.${product.slug}.context.${index}`,
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-5 sm:space-y-7">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.02em] text-brown-100 sm:text-[56px]">
            {t("ProductDetailPage.variants.title")}
          </h2>
          <p className="max-w-[72ch] text-base leading-7 text-brown-80 sm:text-lg">
            {t(
              `ProductDetailPage.products.${product.slug}.variantsDescription`,
            )}
          </p>

          {product.hasVariants ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {product.variants.map((variant) => (
                <article
                  key={variant.slug}
                  className="group overflow-hidden rounded-2xl border border-brown-10 bg-white"
                >
                  <div className="relative">
                    <Image
                      src={variant.image}
                      alt={`${productTitle} ${t(variant.translationKey)}`}
                      width={900}
                      height={560}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/45 via-black/20 to-transparent p-4">
                      <h3 className="text-2xl leading-tight text-white">
                        {t(variant.translationKey)}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link
                      href={
                        variant.hasVariantPage
                          ? {
                              pathname: "/products/[product]/[variant]",
                              params: {
                                product: product.slug,
                                variant: variant.slug,
                              },
                            }
                          : "/contact"
                      }
                    >
                      <Button size="lg" className="w-full">
                        {variant.hasVariantPage
                          ? t("Buttons.viewDetails")
                          : t("Buttons.priceButton")}{" "}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
              <div className="rounded-3xl border border-brown-10 bg-white p-6 sm:p-8">
                <h3 className="text-[30px] leading-tight tracking-[-0.02em] text-brown-100 sm:text-[42px]">
                  {t(
                    `ProductDetailPage.products.${product.slug}.noVariantsTitle`,
                  )}
                </h3>
                <p className="mt-4 text-base leading-7 text-brown-80 sm:text-lg">
                  {t(
                    `ProductDetailPage.products.${product.slug}.noVariantsDescription`,
                  )}
                </p>
                <Link href="/contact">
                  <Button size="lg" className="mt-7">
                    {t("Buttons.leaveRequest")}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.variants.map((variant) => (
                  <article
                    key={variant.slug}
                    className="overflow-hidden rounded-2xl border border-brown-10 bg-white"
                  >
                    <Image
                      src={variant.image}
                      alt={`${productTitle} ${t(variant.translationKey)}`}
                      width={900}
                      height={560}
                      className="h-56 w-full object-cover"
                    />
                    <h3 className="p-4 text-xl text-brown-100">
                      {t(variant.translationKey)}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="space-y-5 sm:space-y-7">
          <h2 className="text-[34px] leading-[1.05] tracking-[-0.02em] text-brown-100 sm:text-[56px]">
            {t.rich(`ProductDetailPage.products.${product.slug}.stagesTitle`, {
              deco: (chunks) => <DecoText>{chunks}</DecoText>,
            })}
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {stageItems.map((stage, index) => (
              <article
                key={stage.title}
                className={`rounded-3xl border border-brown-10 bg-brown-10/60 p-6 sm:p-8 ${
                  index === 1 ? "lg:rounded-[140px]" : ""
                }`}
              >
                <p className="text-3xl leading-[1.1] tracking-[-0.02em] text-brown-100">
                  {stage.title}
                </p>
                <p className="mt-5 text-base leading-7 text-brown-80">
                  {stage.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
