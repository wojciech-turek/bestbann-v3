import { getDictionary, Locale } from "@/dictionaries";
import { BestSellersCarousel } from "./BestSellersCarousel";

const BestSellers = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return <BestSellersCarousel dict={dict} />;
};

export default BestSellers;
