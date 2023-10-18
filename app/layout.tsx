import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Sim Addons",
  description: "New addons for MSFS 2020 to download",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black-200">{children}</body>
    </html>
  );
}
