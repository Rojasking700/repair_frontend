import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "~/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Rojas Repair & Refurbish",
    template: "%s | Rojas Repair & Refurbish",
  },
  description:
    "Professional device repair and refurbishing. Screen replacements, battery swaps, water-damage recovery, diagnostics, and more.", //Fast turnaround and warranty-backed service.
  keywords: [
    "phone repair",
    "iPhone screen replacement",
    "screen repair",
    "tablet repair",
    "laptop repair",
    "battery replacement",
    "charging port repair",
    "data recovery",
    "tech refurbish",
    "electronics repair",
    "Rojas Repair", 
    "Rojas Repair & Refurbish",
  ],
  applicationName: "Rojas Repair & Refurbish",
  authors: [{ name: "Rojas Repair & Refurbish" }],
  creator: "Rojas Repair & Refurbish",
  publisher: "Rojas Repair & Refurbish",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.rojasrepair.com/",
    siteName: "Rojas Repair & Refurbish",
    title: "Expert Tech Repair & Refurbish Services",
    description:
      "Cracked screen? Dead battery? We bring your devices back to life with premium parts and honest pricing.",
    images: [
      {
        url: "https://www.rojasrepair.com/logo/RRR_No_Bg.png",
        width: 1200,
        height: 630,
        alt: "Rojas Repair & Refurbish — Expert Device Repair",
      },
    ],
    locale: "en_US",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Rojas Repair & Refurbish",
  //   description:
  //     "Professional device repair and refurbishing with fast turnaround and warranty-backed service.",
  //   images: ["https://rojasrepair.com/logo/RRR_No_Bg.png"],
  //   creator: "@your_handle",
  // },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#0f172a",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={` ${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={` ${poppins.variable} `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
