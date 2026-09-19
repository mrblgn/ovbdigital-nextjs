"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#141414] text-white px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Contact Information & Address */}
        <div className="lg:col-span-6 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight text-white">
            {t("title")}
          </h2>

          <div className="space-y-6 pt-4">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] shrink-0 mt-1">
                📍
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold font-mono">
                  {t("addressTitle")}
                </h4>
                <p className="text-sm text-gray-200 font-light">{t("address")}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] shrink-0 mt-1">
                📞
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold font-mono">
                  {t("phoneTitle")}
                </h4>
                <p className="text-sm text-gray-200 font-light">{t("phone")}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff2e5f]/10 flex items-center justify-center text-[#ff2e5f] shrink-0 mt-1">
                ✉️
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold font-mono">
                  {t("emailTitle")}
                </h4>
                <p className="text-sm text-gray-200 font-light">{t("email")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form Box */}
        <div className="lg:col-span-6 bg-white text-[#141414] p-8 md:p-10 rounded-2xl shadow-2xl space-y-6">
          <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 font-mono">
            {t("formTitle")}
          </h3>

          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm text-center font-medium">
              Thank you! Your message has been received. We will respond shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={t("formName")}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#ff2e5f] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder={t("formEmail")}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#ff2e5f] transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder={t("formSubject")}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#ff2e5f] transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  required
                  placeholder={t("formMessage")}
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#ff2e5f] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#141414] hover:bg-[#ff2e5f] text-white text-xs uppercase tracking-widest font-bold py-4 rounded-lg transition-colors duration-300"
              >
                {t("formSubmit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
