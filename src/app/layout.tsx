import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/providers";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV_Aleksander_Misterkiewicz",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  ``;
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
