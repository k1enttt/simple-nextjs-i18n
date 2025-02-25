import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateStaticParams() {
  return routing.locales.map((lang) => ({ params: { lang } }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(params.lang)) {
    notFound();
  }

  // Enable static rendering
  // setRequestLocale(params.lang);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={params.lang}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
