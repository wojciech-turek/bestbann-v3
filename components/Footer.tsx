"use client";

import BannetonsLargeText from "@/components/BannetonsLargeText";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import QuestionsBox from "./QuestionsBox";
import { Button } from "./ui/button";

const Footer = () => {
  const t = useTranslations("Footer");
  const tButtons = useTranslations("Buttons");
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const shopLinks = [
    {
      text: t("links.shop.rattan.text"),
      href: "/products/rattan" as const,
      key: "rattan",
    },
    {
      text: t("links.shop.cork.text"),
      href: "/products/cork" as const,
      key: "cork",
    },
    {
      text: t("links.shop.bamboo.text"),
      href: "/products/bamboo" as const,
      key: "bamboo",
    },
    {
      text: t("links.shop.plastic.text"),
      href: "/products/plastic" as const,
      key: "plastic",
    },
    {
      text: t("links.shop.engraved.text"),
      href: "/products/engraved" as const,
      key: "engraved",
    },
    {
      text: t("links.shop.liners.text"),
      href: "/products/liners" as const,
      key: "liners",
    },
  ];

  const infoLinks = [
    {
      text: t("links.info.about.text"),
      href: "/about" as const,
      key: "about",
    },
    {
      text: t("links.info.contacts.text"),
      href: "/contact" as const,
      key: "contacts",
    },
  ];

  return (
    <div>
      {!isContactPage && <QuestionsBox />}
      <BannetonsLargeText />
      <footer className="bg-dark-brown text-white">
        <div className="container mx-auto px-4 py-16 pb-8 sm:pb-48">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-0">
            <div>
              <div className="text-lg font-semibold">
                {t("headings.shop")}
              </div>
              <ul className="mt-4 space-y-3">
                {shopLinks.map((link) => (
                  <li key={link.href} className="text-sm">
                    <Link href={link.href} className="hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold">{t("headings.info")}</div>
              <ul className="mt-4 space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.href} className="text-sm">
                    <Link href={link.href} className="hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className=" sm:text-lg font-semibold">
                {t("headings.office")}
              </div>
              <div className="mt-4 space-y-1 text-sm sm:text-base">
                <p>{t("office.line1")}</p>
                <p>{t("office.line2")}</p>
                <p>{t("office.line3")}</p>
                <p>{t("office.line4")}</p>
                <p>{t("office.line5")}</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end sm:col-span-2">
              <div className="flex flex-col sm:flex-row sm:justify-center gap-9 sm:gap-20 mb-8 sm:mb-14 whitespace-nowrap">
                <div className="space-y-4 sm:space-y-10">
                  <a
                    href="tel:+48123072877"
                    className="block sm:text-xl text-2xl"
                  >
                    +48 12 307 28 77
                  </a>
                  <a
                    href="tel:+48692933069"
                    className="block sm:text-xl text-2xl"
                  >
                    +48 692 933 069
                  </a>
                </div>
                <div className="space-y-4 sm:space-y-10">
                  <a
                    href="mailto:office@bestbann.com"
                    className="block sm:text-xl text-2xl hover:underline"
                  >
                    office@bestbann.com
                  </a>
                  <a
                    href="mailto:shop@bestbann.com"
                    className="block sm:text-xl text-2xl hover:underline"
                  >
                    shop@bestbann.com
                  </a>
                </div>
              </div>
              <Link href={"/contact"} className="">
                <Button variant={"secondary"} size="lg" className="">
                  {tButtons("leaveRequest")} <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 text-white/60">
          <div className="container mx-auto flex justify-between sm:justify-start items-center px-4 py-4 text-sm sm:gap-20 whitespace-nowrap">
            <p>{t("bottom.copyright")}</p>
            <Link href="/privacy-policy" className="hover:underline">
              {t("bottom.privacy.text")}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
