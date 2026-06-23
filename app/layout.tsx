import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gtustudenthub.vercel.app"),
  title: {
    default: "GTUStudentHub - GTU Paper Solutions",
    template: "%s | GTUStudentHub",
  },
  description:
    "Access semester notes, PYQs, and downloadable solution PDFs for BE Computer Engineering students.",
  keywords: [
    "GTU",
    "GTU Student Hub",
    "GTU Diploma Engineering",
    "GTU notes",
    "GTU PYQ papers",
    "GTU viva questions",
    "GTU MCQ practice",
  ],
  openGraph: {
    title: "GTUStudentHub - GTU Paper Solutions",
    description:
      "Access semester notes, PYQs, and downloadable solution PDFs for BE Computer Engineering students.",
    url: "https://gtustudenthub.vercel.app",
    siteName: "GTUStudentHub",
    type: "website",
    images: ["/image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTUStudentHub - GTU Paper Solutions",
    description:
      "Access semester notes, PYQs, and downloadable solution PDFs for BE Computer Engineering students.",
    images: ["/image.png"],
  },
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
  themeColor: "#0f172a",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="NLP-9fwmAi0nQaZ3B_cHKVbbd8wAsiY1UiUhPTuN_vk"
        />
      </head>
      <body
        className={`${inter.className} min-h-dvh overflow-x-hidden bg-slate-950 text-slate-100 antialiased`}
      >
        <Navbar />
        {children}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-B90Y1TNZK6" />
    </html>
  );
}
