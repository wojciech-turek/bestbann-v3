import { getDictionary } from "@/dictionaries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  const { footer, buttons } = dict;

  return (
    <footer className="bg-dark-brown text-white">
      <div className="container mx-auto px-4 py-16 pb-8 sm:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-0">
          <div>
            <div className="text-lg font-semibold">{footer.headings.shop}</div>
            <ul className="mt-4 space-y-3">
              {Object.values(footer.links.shop).map((link) => (
                <li key={link.href} className="text-sm">
                  <Link
                    href={`/${lang}${link.href}`}
                    className="hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold">{footer.headings.info}</div>
            <ul className="mt-4 space-y-3">
              {Object.values(footer.links.info).map((link) => (
                <li key={link.href} className="text-sm">
                  <Link
                    href={`/${lang}${link.href}`}
                    className="hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className=" sm:text-lg font-semibold">
              {footer.headings.office}
            </div>
            <div className="mt-4 space-y-1 text-sm sm:text-base">
              <p>{footer.office.line1}</p>
              <p>{footer.office.line2}</p>
              <p>{footer.office.line3}</p>
              <p>{footer.office.line4}</p>
              <p>{footer.office.line5}</p>
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
            <Link href={`/${lang}/contact`} className="">
              <Button variant={"secondary"} size="lg" className="">
                {buttons.leaveRequest} <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 text-white/60">
        <div className="container mx-auto flex justify-between sm:justify-start items-center px-4 py-4 text-sm sm:gap-20 whitespace-nowrap">
          <p>{footer.bottom.copyright}</p>
          <Link
            href={`/${lang}${footer.bottom.privacy.href}`}
            className="hover:underline"
          >
            {footer.bottom.privacy.text}
          </Link>
          <Link
            href={`/${lang}${footer.bottom.legal.href}`}
            className="hover:underline"
          >
            {footer.bottom.legal.text}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
