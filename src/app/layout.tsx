import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyam Singh — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Divyam Singh — AI Engineer specializing in Transformer architectures, computer vision, and agentic systems. Built a 19.3M parameter LLM from scratch.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Machine Learning",
    "Transformers",
    "PyTorch",
    "Next.js",
    "Computer Vision",
    "LLM",
    "Agentic AI",
  ],
  openGraph: {
    title: "Divyam Singh — AI Engineer & Full Stack Developer",
    description:
      "AI Engineer specializing in Transformer architectures, computer vision, and agentic systems.",
    type: "website",
    url: "https://divyamsingh.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyam Singh — AI Engineer & Full Stack Developer",
    description:
      "AI Engineer specializing in Transformer architectures, computer vision, and agentic systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
