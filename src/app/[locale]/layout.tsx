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

          <div className="w-40 h-96">
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3958818287602115"
              crossOrigin="anonymous"
              strategy="lazyOnload"
            />
            <ins
              className="adsbygoogle"
              style={{ display: "block !important", width: "100px", height: "200px"}}
              data-ad-client="ca-pub-3958818287602115"
              data-ad-slot="9449396794"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

            <Script
              dangerouslySetInnerHTML={{
                __html:
                  "(window.adsbygoogle = window.adsbygoogle || []).push({});",
              }}
            />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
