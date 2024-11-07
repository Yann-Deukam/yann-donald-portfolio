import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yann | Personal website",
  description: "Yann is a frontend developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  bg-amber-50 h-[5000px] pt-28 sm:pt-36`}
      >
        <Head />
        <ActiveSectionContextProvider>
          <Navbar />
          <div className="bg-[#fcdfcf] absolute top-[-6rem] right-[11rem] size-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
          <div className="bg-[#ebcffc] absolute top-[-1rem] left-[-35remrem] size-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
          <main>{children}</main>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
