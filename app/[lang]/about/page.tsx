import { TypographyH1 } from "@/components/shared/TypographyH1";

const AboutUsPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  return (
    <div className="flex flex-col gap-40 bg-beige-3">
      <TypographyH1>About Us</TypographyH1>
    </div>
  );
};

export default AboutUsPage;
