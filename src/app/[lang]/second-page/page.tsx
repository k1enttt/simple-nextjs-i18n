import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function SecondPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  setRequestLocale(lang);

  const t = useTranslations("secondPage");
  return (
    <div>
      <div>{t("welcome")}</div>
      <div>
        {t.rich("content", {
          bold: (chunk) => <strong>{chunk}</strong>,
          i: (chunk) => <i>{chunk}</i>,
        })}
      </div>
      <LanguageSwitcher />
      <Link href="/">
        <button className="border border-black p-2">Back home</button>
      </Link>
    </div>
  );
}
