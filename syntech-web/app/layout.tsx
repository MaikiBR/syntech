import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inria_Sans } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Syntech",
  description: "Syntech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inria.className}>{children}</body>
    </html>
  );
}
