import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvasClient from "./StarsCanvasClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] min-h-screen overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto w-full`}
      >
        <StarsCanvasClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
