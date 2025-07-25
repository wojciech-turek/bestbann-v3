"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dictionary } from "@/types/dictionary";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TypographyH4 } from "./shared/TypographyH4";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Header = ({
  lang,
  links,
  buttons,
}: {
  lang: string;
  links: Dictionary["footer"]["links"];
  buttons: Dictionary["buttons"];
}) => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight; // Or a specific element's height
      const currentScroll = window.scrollY;
      const opacity = Math.min(currentScroll / (heroSectionHeight * 0.5), 0.6);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="fixed py-3 z-20 w-full backdrop-blur-sm px-4 sm:px-9"
      style={{
        backgroundColor: `oklch(0.3443 0.0678 48.07 / ${scrollOpacity})`,
      }}
    >
      <div className="container flex h-14 max-w-screen-2xl mx-auto items-center justify-between">
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center w-full relative ">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full absolute px-8 bg-white text-black"
              >
                {isMenuOpen ? (
                  <XIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-4/5 p-4 pt-8">
              <div className="flex flex-col justify-center gap-5">
                <Image
                  src="/imgs/logo-black.png"
                  alt="BestBann"
                  width={143}
                  height={32}
                  className="object-contain mx-auto"
                />
                <Separator />
                <div className="flex flex-col gap-4">
                  <TypographyH4 className="text-orange-100 text-2xl">
                    Menu
                  </TypographyH4>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="text-xl text-brown-100 font-medium"
                      href={`/${lang}`}
                    >
                      Products
                    </Link>
                    <Link
                      className="text-xl text-brown-100 font-medium"
                      href={`/${lang}`}
                    >
                      About Us
                    </Link>
                    <Link
                      className="text-xl text-brown-100 font-medium"
                      href={`/${lang}`}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-4">
                  <TypographyH4 className="text-orange-100 text-2xl">
                    Language
                  </TypographyH4>
                  <LanguageSwitcher />
                </div>
                <Separator />
                <div className="flex flex-col gap-4">
                  <TypographyH4 className="text-orange-100 text-2xl">
                    Contact
                  </TypographyH4>
                  <div className="space-y-4 text-brown-100 font-medium">
                    <div className="space-y-1">
                      <a href="tel:+48123072877" className="block text-xl">
                        +48 12 307 28 77
                      </a>
                      <a href="tel:+48692933069" className="block text-xl">
                        +48 692 933 069
                      </a>
                    </div>
                    <div className="space-y-1">
                      <a
                        href="mailto:office@bestbann.com"
                        className="block text-xl hover:underline"
                      >
                        office@bestbann.com
                      </a>
                      <a
                        href="mailto:shop@bestbann.com"
                        className="block text-xl hover:underline"
                      >
                        shop@bestbann.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="w-[143px] h-[32px] relative mx-auto">
            <Link href={`/${lang}`}>
              <Image
                src="/imgs/logo.png"
                alt="BestBann"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  showChevron={false}
                  className="rounded-full flex items-center gap-2 px-5 py-3"
                >
                  <MenuIcon className="h-4 w-4" />
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {links.shop.map((product) => (
                      <ListItem
                        key={product.href}
                        href={`/${lang}${product.href}`}
                        title={product.text}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {links.info.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    asChild
                    className="rounded-full px-4 py-2"
                  >
                    <Link
                      href={`/${lang}${link.href}`}
                      className="text-white font-semibold"
                    >
                      {link.text}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-[165px] h-[38px] relative">
            <Link href={`/${lang}`}>
              <Image
                src="/imgs/logo.png"
                alt="BestBann"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <Button>{buttons.leaveRequest}</Button>
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
}: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Header;
