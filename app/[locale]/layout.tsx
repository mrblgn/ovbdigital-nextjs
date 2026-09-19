import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { cacheLife } from "next/cache";
import { Montserrat, Roboto } from "next/font/google";
import { locales } from "@/i18n/routing";
import { Content } from "@/components/common/content";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "@/styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OvB Digital",
  description: "Digital solutions for your business.",
};

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export function generateStaticParams() {
  // Return an array of objects where the key matches the folder name
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <Content>{children}</Content>
          <Footer currentYear={await getCurrentYear()} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
