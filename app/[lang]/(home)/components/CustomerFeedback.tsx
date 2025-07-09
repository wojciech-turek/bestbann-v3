import { getDictionary } from "@/dictionaries";
import { CustomerFeedbackCarousel } from "./CustomerFeedbackCarousel";

const CustomerFeedback = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  return <CustomerFeedbackCarousel dict={dict} />;
};

export default CustomerFeedback;
