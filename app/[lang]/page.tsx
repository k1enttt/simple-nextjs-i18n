import { getDictionary } from './dictionaries'

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div>
      <div>{dict.home.welcome}</div>
      <div>{dict.home.language}: {lang}</div>

      <button className="border border-black p-2">
        Change language
      </button>
    </div>
  );
}
