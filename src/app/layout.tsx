import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV_Aleksander_Misterkiewicz",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locales = await getMessages();
  return (
    <html lang={locale}>
      <Providers>
        <NextIntlClientProvider messages={locales}>
          <body className={inter.className}>{children}</body>
        </NextIntlClientProvider>
      </Providers>
    </html>
  );
}
