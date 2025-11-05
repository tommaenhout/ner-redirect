import type { Metadata } from "next";
import { Bacasime_Antique } from "next/font/google";
import "./globals.css";

const bacasimeAntique = Bacasime_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bacasime-antique",
});

export const metadata: Metadata = {
  title: "NER",
  description: "NER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={bacasimeAntique.variable}>
        {children}
      </body>
    </html>
  );
}
