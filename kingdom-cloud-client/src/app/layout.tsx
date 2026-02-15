import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingdom Construction Cloud Portal",
  description: "Client portal and workflow surface for The Kingdom Construction Webflow Cloud deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${sourceSans.variable} antialiased`}>
        <DevLinkProvider>
          {/* Add here any Navbar or Header you want to be present on all pages */}
          {children}
          {/* Add here any Footer you want to be present on all pages */}
        </DevLinkProvider>
      </body>
    </html>
  );
}
