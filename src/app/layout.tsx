import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srija Bhashyam | Data Science Portfolio",
  description: "Data Science, Analytics, AI, and Business Intelligence Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}