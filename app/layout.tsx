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
    <html lang="en" className="dark">
      <body className="bg-black-200 scroll-smooth scrollbar scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-thumb-grey-200 scrollbar-track-black-300 scrollbar-thumb-rounded-lg">
        {children}
      </body>
    </html>
  );
}
