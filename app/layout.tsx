import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "موقع ",
  description: "موقع ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased bg-[#F8F8F8] text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
