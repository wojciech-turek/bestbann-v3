import DecoText from "@/components/shared/DecoText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

const ContactPage = async ({ params }: ContactPageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return (
    <div className="bg-beige-1 px-4 sm:px-9 py-10 sm:py-16">
      <section className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-[40px] border border-brown-10 bg-linear-to-br from-white to-beige-2 p-6 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_520px] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <TypographyH2 className="text-left">
                {t.rich("hero.title", {
                  deco: (chunks) => <DecoText>{chunks}</DecoText>,
                })}
              </TypographyH2>
              <p className="max-w-[62ch] text-brown-80 text-base sm:text-lg leading-7">
                {t("hero.description")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-brown-10 bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-20 text-orange-100">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-brown-100">
                  {t("details.phoneTitle")}
                </h3>
                <a
                  href="tel:+48123072877"
                  className="mt-2 block text-brown-80 hover:text-brown-100"
                >
                  {t("details.phonePrimary")}
                </a>
                <a
                  href="tel:+48692933069"
                  className="mt-1 block text-brown-80 hover:text-brown-100"
                >
                  {t("details.phoneSecondary")}
                </a>
              </article>

              <article className="rounded-3xl border border-brown-10 bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-20 text-orange-100">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-brown-100">
                  {t("details.emailTitle")}
                </h3>
                <a
                  href="mailto:office@bestbann.com"
                  className="mt-2 block text-brown-80 hover:text-brown-100"
                >
                  {t("details.emailPrimary")}
                </a>
                <a
                  href="mailto:shop@bestbann.com"
                  className="mt-1 block text-brown-80 hover:text-brown-100"
                >
                  {t("details.emailSecondary")}
                </a>
              </article>

              <article className="rounded-3xl border border-brown-10 bg-white p-6 sm:col-span-2">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-20 text-orange-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-brown-100">
                  {t("details.addressTitle")}
                </h3>
                <p className="mt-2 text-brown-80">{t("details.addressLine1")}</p>
                <p className="text-brown-80">{t("details.addressLine2")}</p>
                <p className="text-brown-80">{t("details.addressLine3")}</p>
              </article>
            </div>

            <div className="relative h-[260px] overflow-hidden rounded-3xl border border-brown-10 sm:h-[320px]">
              <Image
                src="/imgs/home/weronika-and-michal.png"
                alt={t("hero.imageAlt")}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-brown-10 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-medium text-brown-100">
              {t("form.title")}
            </h3>
            <p className="mt-2 text-brown-80">{t("form.description")}</p>
            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-brown-100"
                >
                  {t("form.fields.name.label")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("form.fields.name.placeholder")}
                  className="h-12 w-full rounded-2xl border border-brown-20 bg-beige-1 px-4 text-brown-100 outline-none focus:border-orange-100"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-brown-100"
                >
                  {t("form.fields.email.label")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("form.fields.email.placeholder")}
                  className="h-12 w-full rounded-2xl border border-brown-20 bg-beige-1 px-4 text-brown-100 outline-none focus:border-orange-100"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-brown-100"
                >
                  {t("form.fields.company.label")}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t("form.fields.company.placeholder")}
                  className="h-12 w-full rounded-2xl border border-brown-20 bg-beige-1 px-4 text-brown-100 outline-none focus:border-orange-100"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brown-100"
                >
                  {t("form.fields.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("form.fields.message.placeholder")}
                  className="min-h-32 w-full resize-y rounded-2xl border border-brown-20 bg-beige-1 px-4 py-3 text-brown-100 outline-none focus:border-orange-100"
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {t("form.submit")}
              </Button>
              <p className="text-sm text-brown-60">{t("form.notice")}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
