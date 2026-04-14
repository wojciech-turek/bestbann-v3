import productsCatalogJson from "@/data/products-catalog.json";

export type ProductVariant = {
  slug: string;
  translationKey: string;
  image: string;
  isBestseller: boolean;
};

export type ProductCategory = {
  slug: string;
  href: string;
  headerLinkKey: string;
  homeProductKey: string;
  translationKey: string;
  coverImage: string;
  hasVariants: boolean;
  variants: ProductVariant[];
};

export type ProductsCatalog = {
  products: ProductCategory[];
};

export const productsCatalog = productsCatalogJson as ProductsCatalog;

export const getProductBySlug = (slug: string) =>
  productsCatalog.products.find((product) => product.slug === slug);
