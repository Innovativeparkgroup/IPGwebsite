import type { Metadata } from "next";
import { Hanken_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Substitute for the prototype's licensed 'Neue Montreal' / 'Telegraf' display faces.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovativeparkgroup.com"),
  title: "Innovative Park Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
