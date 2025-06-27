'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import LoaderWrapper from "@/components/LoaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}>
        <LoaderWrapper />
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
