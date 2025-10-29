import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "~/components/footer/footer";

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
  title: "North Peak Snowboards",
  description: "eCommerce site developed and designed by Gabriel Rojas",
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
