import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import Wrapper from "@/components/ui/wrapper/Wrapper";
import { montserrat } from "@/assets/typography/fonts";
import Header from "@/components/widgets/header/Header";
import Footer from "@/components/widgets/footer/Footer";

export const metadata: Metadata = {
  title: "SHOP MVP",
  description: "e-commerce using FakeStoreAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} h-full leading-none w-full scroll-smooth md:scroll-auto`}>
      <body className={`font-sans bg-white text-black flex flex-col min-h-screen h-full tracking-wide`}>
        <Header />
        <main className="flex-1 pt-12">
          <Wrapper>
            {children}
          </Wrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
