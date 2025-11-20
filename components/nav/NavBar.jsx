import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/nav/NavBar.module.scss'
import { Poppins, Pixelify_Sans } from 'next/font/google'
import { VT323, Press_Start_2P    } from "next/font/google";

const pressStart = Press_Start_2P  ({
  subsets: ["latin"],
  weight: "400", // Only one available for this font
  display: "swap",
});
const PixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins',
})

export default function NavBar() {

  return (
    <nav className={`${styles.NavBar}`}>

      <div className={styles.logo}>
        <Image
          // src="/logo/NorthPeakLogo1.png"
          src="/logo/RRR_No_Bg.png"
          alt="Rojas Repair & Refurbish logo"
          width={160}
          height={75}
          priority
        />

        {/* <h3 className={``} >Rojas Repair & Refurbish</h3> */}
        {/* <h3 className={`${pressStart.className}`} >Rojas Repair & Refurbish</h3> */}

      </div>
      <div className={styles.icons}>
        {/* <Image
          src="/icons/magnifying-glass-solid-full.svg"
          alt="magnifying-glass-solid-full"
          width={30}
          height={30}
          priority
        /> */}
        {/* <Image
          src="/icons/user-solid-full.svg"
          alt="user-solid-full"
          width={30}
          height={30}
          priority
        /> */}
        {/* <Image
          src="/icons/cart-shopping-solid-full.svg"
          alt="cart-shopping-solid-full"
          width={30}
          height={30}
          priority
        /> */}

      </div>
      <div className={`${styles.links}`} >
        {/* <Link href={`#`} >Services</Link> */}
        {/* <Link href={`#`} >Pricing</Link> */}
        {/* <Link href={`#`} >Reviews</Link> */}
        {/* <Link href={`#`} >Book</Link> */}
        {/* <Link href={`#`} >Home</Link> */}
        {/* <Link href={`#`} >Qoute</Link> */}
        {/* <Link href={`#`} >Contact</Link> */}
        {/* <Link href={`#`} >About</Link> */}
        {/* <Link href={`#`} >Contact</Link> */}
      </div>
    </nav>
  )
}