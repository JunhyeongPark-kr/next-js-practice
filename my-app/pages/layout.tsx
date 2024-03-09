import React from "react";
import { Inter } from "next/font/google";
import "../styles/global.css";
import { metadata } from "../metadata";

type Metadata = {
  title: string;
  description: string;
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className ?? ""}>{children}</body>
    </html>
  );
}
