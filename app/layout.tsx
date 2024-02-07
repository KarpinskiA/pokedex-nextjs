import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Find all your favorite Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
