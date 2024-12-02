import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshay | Frontend Engineer",
  description: "Harshay is Frontend Engineer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f8ee5a] absolute top-[-2rem] sm:top-[-6rem] -z-10 animate-backgroundFirst h-[10rem] w-[8rem] sm:h-[17rem] sm:w-[17rem] lg:h-[20rem] lg:w-[20rem] rounded-full max-sm:blur-[7rem] blur-[10rem] dark:bg-[#498ec7]"></div>
        <div className="bg-[#5a69f3] absolute -z-10 animate-backgroundSecond h-[12rem] w-[12rem] sm:h-[17rem] sm:w-[17rem] lg:h-[20rem] lg:w-[20rem] rounded-full max-sm:blur-[7rem] blur-[10rem] dark:bg-[#71a5bb]"></div>
        <div className="bg-[#f8aee6] absolute top-[35rem] left-[-4rem] animate-backgroundThird -z-10 h-[12rem] w-[10rem] sm:h-[17rem] sm:w-[17rem] lg:h-[20rem] lg:w-[20rem] rounded-full max-sm:blur-[7rem] blur-[10rem] dark:bg-[#5f2556]"></div>

        {/* <div className="bg-[#fd91eb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#9bdaf8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
