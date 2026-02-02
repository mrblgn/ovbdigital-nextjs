import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about")
  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("another")}</p>
    </div>
  );
}