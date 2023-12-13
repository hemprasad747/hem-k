// layout.jsx
import React from 'react';
import "./globals.css"; // Adjust the path based on your actual structure
import { Inter } from "next/font/google";
import { Metadata } from "next";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import EmailSection from "@/components/main/EmailSection"; // Import the EmailSection component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "universe Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
