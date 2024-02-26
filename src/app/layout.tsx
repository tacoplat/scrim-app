import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrimble",
  description: "Schedule, manage, and view eSports matchups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
