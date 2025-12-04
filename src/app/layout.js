import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omar Faruk",
  description: "Omar Faruk — Full-stack web developer skilled in React, Next.js, Node.js, and modern web technologies."

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-300`}
      >

        <Navbar />

        <div className="min-h-screen ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
