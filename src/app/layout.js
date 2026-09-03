import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://www.diegocampuzano.cl"),
  title: {
    default: "Diego Campuzano | Full-Stack & Web Developer",
    template: "%s | Diego Campuzano",
  },
  description:
    "Diego Campuzano is a web developer with a passion for creating intuitive, user-friendly interfaces and developing reliable, full-stack applications.",
  authors: [{ name: "Diego Campuzano", url: "https://www.diegocampuzano.cl" }],
  creator: "Diego Campuzano",
  keywords: [
    "Diego Campuzano",
    "Web Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.diegocampuzano.cl",
    title: "Diego Campuzano | Full-Stack & Web Developer",
    description:
      "Diego Campuzano is a web developer with a passion for creating intuitive, user-friendly interfaces and developing reliable, full-stack applications.",
    siteName: "Diego Campuzano Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Diego Campuzano - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Campuzano | Full-Stack & Web Developer",
    description:
      "Diego Campuzano is a web developer with a passion for creating intuitive, user-friendly interfaces and developing reliable, full-stack applications.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#cba6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#cba6f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Campuzano",
  url: "https://www.diegocampuzano.cl",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/hermani456",
    "https://www.linkedin.com/in/diegocampuzano/",
    "https://www.frontendmentor.io/profile/hermani456",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full-Stack Development",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
    "WebAssembly",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${exo.variable} antialiased bg-base`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
