import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function SecondPage() {
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
      <Link href="/">
        <button className="border border-black p-2">Back home</button>
      </Link>
    </div>
  );
}
