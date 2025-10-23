import DecoText from "@/components/shared/DecoText";
import { TypographyH1 } from "@/components/shared/TypographyH1";
import { useTranslations } from "next-intl";

const ProductsPage = () => {
  const t = useTranslations("HomePage.hero");
  return (
    <div className="flex flex-col gap-40 bg-beige-1 px-9">
      <TypographyH1>
        {t.rich("slogan", {
          deco: (chunks) => <DecoText>{chunks}</DecoText>,
        })}
      </TypographyH1>
    </div>
  );
};

export default ProductsPage;
