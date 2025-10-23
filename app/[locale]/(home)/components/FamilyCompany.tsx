import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyP } from "@/components/shared/TypographyP";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FamilyCompany = ({ showButton }: { showButton: boolean }) => {
  const t = useTranslations("Shared.familyCompany");
  const tButtons = useTranslations("Buttons");
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-8 sm:gap-20 items-center justify-center px-4 sm:px-0">
      <div className="flex flex-col items-end">
        <Image
          src="/imgs/home/weronika-and-michal.png"
          alt="Weronika and Michal"
          width={500}
          height={500}
          className="rounded-lg"
        />
        <TypographyP className="self-start">{t("imageCaption")}</TypographyP>
      </div>
      <div className="flex flex-col justify-center basis-1/2">
        <TypographyH2 className="text-left">
          {t.rich("title", {
            deco: (chunks) => <DecoText>{chunks}</DecoText>,
          })}
        </TypographyH2>
        <TypographyP className="mt-4 text-lg max-w-[50ch]">
          {t("description")}
        </TypographyP>
        <TypographyP className="mt-4 text-lg max-w-[50ch]">
          {t("description1")}
        </TypographyP>
        {showButton && (
          <>
            <div className="my-8 bg-brown-10 text-lg max-w-[50ch] h-[2.5px]" />
            <Button asChild size="lg" className="mt-8 self-start px-12">
              <Link href="/about">
                {tButtons("moreAboutUs")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FamilyCompany;
