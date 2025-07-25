import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyanshu Patel", 
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a192f] text-[#ccd6f6]`}
      >
        <Sidebar />
        <div className="fixed right-8 bottom-0 flex flex-col items-center z-40">
          <a
            href="mailto:divyanshupatel01234@gmail.com"
            className="mb-8 text-slate text-sm tracking-widest font-mono hover:text-green transition"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.1em" }}
          >
            divyanshupatel01234@gmail.com
          </a>
          <div className="w-px h-32 bg-lightest-navy" />
        </div>
        {children}
      </body>
    </html>
  );
}
