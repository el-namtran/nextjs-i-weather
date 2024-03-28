import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";
import { notFound } from "next/navigation";
import LocaleSwitcher from "@/app/[locale]/components/LocaleSwitcher";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <AntdRegistry>
            <LocaleSwitcher />
            {children}
          </AntdRegistry>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1306347518895292"
            crossOrigin="anonymous"
          ></Script>
          <ins
            className="adsbygoogle"
            style={{ display: "block !importantack" }}
            data-ad-client="ca-pub-1306347518895292"
            data-ad-slot="1702569026"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}