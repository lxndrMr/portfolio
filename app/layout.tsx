import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import ThemeSwitch from "@/src/components/Theme-switch";
import ActiveSectionContextProvider from "@/src/context/active-section-context";
import ThemeContextProvider from "@/src/context/theme-context";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Alex | Portfolio Personnel",
  description:
    "Alex est un développeur full stack, qui aime construire des choses avec React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body
        className={`${geistMono.variable} font-geist bg-[#faf6f1] text-[#2c2c2c] relative pt-28
          sm:pt-36 dark:bg-[#2A2A38] dark:text-[#eaeaea] dark:text-opacity-90`}
      >
        <div
          className="bg-[#ffb0a5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem]
            rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#f48fb1]"
        ></div>
        <div
          className="bg-[#a1c6eb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]
            rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
            xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#80e27e]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
