import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
// import { setRequestLocale } from "next-intl/server";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // Enable static rendering
  setRequestLocale(lang);

  const t = useTranslations('home');

  return (
    <div>
      <div>{t("welcome")}</div>
      <div>
        {t("language")}: {lang}
      </div>
      <LanguageSwitcher />

      <Link href="/second-page"><button className="border border-black p-2">Go to next page</button></Link>
    </div>
  );
}
