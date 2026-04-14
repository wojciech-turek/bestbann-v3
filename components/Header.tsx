"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { productsCatalog } from "@/lib/products-catalog";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
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
  | "/products"
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
                  <Link
                    href="/products"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-2 flex items-center justify-between rounded-xl bg-beige-2 px-3 py-2.5 text-base font-semibold text-brown-100 transition-colors hover:bg-beige-3"
                  >
                    {t("menu.allProducts")}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      className="rounded-lg px-3 py-2 text-xl font-medium text-brown-100 hover:bg-brown-500"
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
                  <div className="md:w-[600px] lg:w-[820px]">
                    <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                      {productLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none overflow-hidden rounded-xl border border-brown-10 bg-white no-underline outline-none transition-colors hover:bg-beige-2 focus:bg-beige-2"
                            >
                              <Image
                                src={link.image}
                                alt={link.title}
                                width={400}
                                height={240}
                                className="h-32 w-full object-cover"
                              />
                              <div className="p-3">
                                <div className="text-sm font-semibold text-brown-100">
                                  {link.title}
                                </div>
                                <p className="mt-1 line-clamp-2 text-xs leading-snug text-brown-80">
                                  {link.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/products"
                        className="mt-2 flex items-center justify-between rounded-xl bg-beige-2 px-4 py-3 text-sm font-semibold text-brown-100 transition-colors hover:bg-beige-3"
                      >
                        {t("menu.allProducts")}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </NavigationMenuLink>
                  </div>
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

export default Header;
