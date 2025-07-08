"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./ui/button";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Product 1",
//     href: "/products/1",
//     description: "This is a description for product 1.",
//   },
//   {
//     title: "Product 2",
//     href: "/products/2",
//     description: "This is a description for product 2.",
//   },
//   {
//     title: "Product 3",
//     href: "/products/3",
//     description: "This is a description for product 3.",
//   },
//   {
//     title: "Product 4",
//     href: "/products/4",
//     description: "This is a description for product 4.",
//   },
// ];

const Header = () => {
  return (
    <header className="fixed py-3 z-20 w-full backdrop-blur-sm px-9">
      <div className="container flex h-14 max-w-screen-2xl mx-auto items-center justify-between">
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
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-full px-4 py-2">
                <Link href="/about" className="text-white font-medium">
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="rounded-full px-4 py-2">
                <Link href="/contact" className="text-white font-medium">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="w-[165px] h-[38px] relative">
          <Link href="/">
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
          <Button>Leave a request</Button>
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
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
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
