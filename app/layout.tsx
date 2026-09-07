import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "whoisnacho",
  description: "sitio personal de nacho. en construcción.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={pixel.className}>
      <body>{children}</body>
    </html>
  );
}
