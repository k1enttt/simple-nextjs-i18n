'use client';
import { useTranslations } from "next-intl";
// import { setRequestLocale } from "next-intl/server";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // Enable static rendering
  // setRequestLocale(lang);

  const t = useTranslations('home');

  return (
    <div>
      <div>{t("welcome")}</div>
      <div>
        {t("language")}: {lang}
      </div>

      <button className="border border-black p-2">Change language</button>
    </div>
  );
}
