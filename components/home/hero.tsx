import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="font-montserrat">
      <h1 className="hidden">OvB Digital</h1>
      <div className="flex items-center justify-center w-full h-screen text-white bg-[url(@/assets/images/o-hero-4.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="absolute left-0 top-0 right-0 bottom-0 z-0 bg-black/35" />
        <div className="flex flex-col max-w-3/5 items-center justify-center">
          <h2 className="text-6xl leading-16 text-center mb-8 font-semibold whitespace-pre-line z-10">
            {t("build-software")}
          </h2>
          <p className="text-center text-md leading-6 font-medium mb-8 z-10">
            {t("design-develop")}
          </p>
          <div className="flex space-x-8 z-10">
            <Link
              href="/contact"
              className="text-md font-medium hover:bg-white/40 border border-white rounded px-3 py-2"
            >
              {t("start-project")}
            </Link>
            <Link
              href="/services"
              className="text-md font-medium hover:bg-white/40 border border-white rounded px-3 py-2"
            >
              {t("view-work")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
