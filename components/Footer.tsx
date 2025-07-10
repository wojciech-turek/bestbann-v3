import { getDictionary } from "@/dictionaries";

const Footer = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  return <div className="bg-brown-100 text-white">Footer</div>;
};

export default Footer;
