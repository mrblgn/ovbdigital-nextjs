import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat, Roboto } from "next/font/google";
import { Content } from "@/components/common/content";
import Header from "@/components/common/header";
import { locales } from "@/i18n/routing";
import "@/styles/globals.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
