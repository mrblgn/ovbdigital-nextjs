import { useTranslations } from "next-intl";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function About() {
  const t = useTranslations("about")
  return (
    <div>
      <h1>{t("hello")}</h1>
      <p>{t("another")}</p>
    </div>
  );
}