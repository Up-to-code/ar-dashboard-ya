import type { Metadata } from "next";
 import "./globals.css";
import Header from "@/components/layout/Header";
import SiderBar from "@/components/layout/Sidebar/SiderBar";

 

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
        className={`antialiased bg-[#F8F8F8] text-foreground font-lama`}
      >
        <Header />
        <div className="flex gap-4 p-4">
          <SiderBar />
          <div className="flex-1  rounded-lg p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
