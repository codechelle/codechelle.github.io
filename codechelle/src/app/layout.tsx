import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./layout/nav";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const bodyClass = `${openSans.className} bg-[#011f33]`;

export const metadata: Metadata = {
  title: "Nichelle Hayes",
  description: "The UI Engineer that solves problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
