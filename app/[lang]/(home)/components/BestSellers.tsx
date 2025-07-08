import { getDictionary } from "@/dictionaries";
import { BestSellersCarousel } from "./BestSellersCarousel";

const BestSellers = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  return <BestSellersCarousel dict={dict} />;
};

export default BestSellers;
