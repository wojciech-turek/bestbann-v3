import Hero from "./components/Hero";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div>
      <Hero lang={lang} />
    </div>
  );
}
