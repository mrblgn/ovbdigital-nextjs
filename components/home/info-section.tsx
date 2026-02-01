import { useTranslations } from "next-intl";
import InfoCard from "./info-card";

const CARDS = [
  { limit: 150, title: "happy-clients" },
  { limit: 460, title: "solutions" },
  { limit: 240, title: "websites" },
  { limit: 52, title: "mobile-apps" },
];

const InfoSection = () => {
  const t = useTranslations("index");
  return (
    <section id="info" className="bg-white grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 py-[7.5rem]">
      {CARDS.map(({ limit, title }, index) => (
        <InfoCard key={title + index} limit={limit} text={t(title)} />
      ))}
    </section>
  );
};

export default InfoSection;
