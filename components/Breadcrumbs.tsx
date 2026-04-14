"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const t = useTranslations("Breadcrumbs");

  // Don't render on homepage
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = t(segment as Parameters<typeof t>[0]);
    const isLast = index === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-brown-10 bg-beige-1 px-4 sm:px-9"
    >
      <div className="container mx-auto flex max-w-screen-2xl items-center gap-1.5 py-2.5 text-sm">
        <Link
          href="/"
          className="flex items-center text-brown-60 transition-colors hover:text-brown-100"
        >
          <HomeIcon className="h-3.5 w-3.5" />
        </Link>
        {crumbs.map((crumb) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            <ChevronRightIcon className="h-3.5 w-3.5 text-brown-20" />
            {crumb.isLast ? (
              <span className="font-medium text-brown-100">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href as "/" | "/about" | "/products" | "/contact"}
                className="text-brown-60 transition-colors hover:text-brown-100"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
