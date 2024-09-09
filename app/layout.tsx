import type { Metadata } from "next";
import { Inter } from "next/font/google";
// stylings
import "./globals.css";
import 'slick-carousel/slick/slick.css'
const inter = Inter({ subsets: ["latin"] });
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "TMS",
  description: "Tour and Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className=''>
          
          {children}
          
          </body>
      </html>
    </ClerkProvider>
  );
}
