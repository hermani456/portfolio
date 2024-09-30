import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ogImage from "./dclogosm.png";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

const exo = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Diego Campuzano",
  description:
    "Diego Campuzano is a web developer with a passion for creating intuitive, user-friendly interfaces and developing reliable, full-stack applications.",
  metadataBase: new URL("https://www.diegocampuzano.com"),
  openGraph: {
    title: 'Diego Campuzano',
    description: "Diego Campuzano is a web developer with a passion for creating intuitive, user-friendly interfaces and developing reliable, full-stack applications.",
    url: 'https://www.diegocampuzano.com',
    siteName: 'Diego Campuzano',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "Diego Campuzano",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${exo.variable} antialiased bg-back`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
