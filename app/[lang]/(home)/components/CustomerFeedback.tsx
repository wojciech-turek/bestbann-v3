import { getDictionary, Locale } from "@/dictionaries";
import { CustomerFeedbackCarousel } from "./CustomerFeedbackCarousel";

const CustomerFeedback = async ({ lang }: { lang: Locale }) => {
  const dict = await getDictionary(lang);

  return <CustomerFeedbackCarousel dict={dict} />;
};

export default CustomerFeedback;
