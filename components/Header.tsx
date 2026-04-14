"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { productsCatalog } from "@/lib/products-catalog";
import { MenuIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TypographyH4 } from "./shared/TypographyH4";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type ProductHref =
  | "/products/rattan"
  | "/products/cork"
  | "/products/bamboo"
  | "/products/plastic"
  | "/products/engraved"
  | "/products/liners";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");
  const tProducts = useTranslations("ProductsPage");
  const tButtons = useTranslations("Buttons");

  const navLinks = [
    {
      href: "/about" as const,
      title: t("navLinks.about"),
    },
    {
      href: "/contact" as const,
      title: t("navLinks.contact"),
    },
  ];

  const productLinks = productsCatalog.products.map((product) => ({
    href: product.href as ProductHref,
    title: t(`productLinks.links.${product.slug}` as Parameters<typeof t>[0]),
    description: tProducts(
      `products.${product.slug}.description` as Parameters<typeof tProducts>[0],
    ),
    image: product.coverImage,
  }));

  const featuredRattan = productLinks.find(
    (link) => link.href === "/products/rattan",
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brown-10 bg-beige-1/78 px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-beige-1/62 sm:px-9">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="relative flex w-full items-center md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="absolute rounded-full border-brown-20 bg-white/95 px-8 text-brown-100"
              >
                {isMenuOpen ? (
                  <XIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-11/12 p-4 pt-8 sm:w-[420px]">
              <div className="flex flex-col gap-5">
                <Image
                  src="/imgs/logo-black.png"
                  alt="BestBann"
                  width={143}
                  height={32}
                  className="mx-auto object-contain"
                />
                <Separator />

                <div className="rounded-2xl border border-brown-10 bg-beige-1 p-4">
                  <TypographyH4 className="text-left text-xl text-brown-100">
                    {t("productLinks.title")}
                  </TypographyH4>
                  {featuredRattan && (
                    <Link
                      href={featuredRattan.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="mt-3 overflow-hidden rounded-xl border border-brown-10 bg-white">
                        <Image
                          src={featuredRattan.image}
                          alt={featuredRattan.title}
                          width={640}
                          height={360}
                          className="h-36 w-full object-cover"
                        />
                        <div className="p-3">
                          <p className="text-lg font-medium text-brown-100">
                            {featuredRattan.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        className="rounded-lg px-3 py-2 text-base font-medium text-brown-100 hover:bg-brown-10"
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      className="rounded-lg px-3 py-2 text-xl font-medium text-brown-100 hover:bg-brown-10"
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>

                <Separator />
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>

          <div className="relative mx-auto h-[32px] w-[143px]">
            <Link href="/">
              <Image
                src="/imgs/logo-black.png"
                alt="BestBann"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="hidden w-full items-center justify-between md:flex">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  showChevron={false}
                  className="rounded-full border border-brown-20 bg-white/95 px-5 py-3 text-brown-100 hover:bg-white"
                >
                  <MenuIcon className="h-4 w-4" />
                  {t("productLinks.title")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[520px] lg:w-[680px] lg:grid-cols-[1fr_1.1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border border-brown-10 bg-white no-underline outline-hidden select-none focus:shadow-md"
                          href="/products/rattan"
                        >
                          <Image
                            src="/imgs/products/rattan/cover.png"
                            alt={t("productLinks.links.rattan")}
                            width={560}
                            height={360}
                            className="h-40 w-full object-cover"
                          />
                          <div className="p-4">
                            <div className="mb-1 text-lg font-semibold text-brown-100">
                              {t("productLinks.links.rattan")}
                            </div>
                            <p className="line-clamp-3 text-sm leading-tight text-brown-80">
                              {t("menu.rattanFeatured")}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {productLinks.map((link) => (
                      <ListItem
                        key={link.href}
                        href={link.href}
                        title={link.title}
                      >
                        {link.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className="rounded-full px-4 py-2"
                  >
                    <Link
                      href={link.href}
                      className="font-semibold text-brown-100"
                    >
                      {link.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative h-[38px] w-[165px]">
            <Link href="/">
              <Image
                src="/imgs/logo-black.png"
                alt="BestBann"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button className="px-12 py-3 text-base leading-6 font-semibold">
                {tButtons("priceButton")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: ProductHref;
  title: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-2 rounded-lg border border-brown-10 bg-white p-3 leading-none no-underline outline-none transition-colors hover:bg-beige-2 focus:bg-beige-2"
        >
          <div className="text-sm leading-none font-semibold text-brown-100">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-brown-80">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Header;
