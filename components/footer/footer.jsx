import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/footer/footer.module.scss'
import { Poppins } from 'next/font/google'

import FacebookIcon from '~/public/icons/SocialMedia/facebook-f-brands-solid-full.svg'
import InstagramIcon from '~/public/icons/SocialMedia/instagram-brands-solid-full.svg'
import XIcon from '~/public/icons/SocialMedia/tiktok-brands-solid-full.svg'
import TikTokIcon from '~/public/icons/SocialMedia/x-twitter-brands-solid-full.svg'
import YoutubeIcon from '~/public/icons/SocialMedia/youtube-brands-solid-full.svg'

export default function Footer() {

  return (
    <footer className={styles.FooterOuter}>
      <div className={styles.FooterInner}>
        <div className={styles.topCommentContainer}>
          <p>Free Shipping on all orders!</p>
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.FooterLeft}>
            <div className={styles.FooterLeftSection}>
              <Image
                // src="/logo/NorthPeakLogo1_off_white.png"
                src="/logo/NorthPeakLogo2_off_white.png"
                alt="North Peak logo"
                width={200}
                height={59}
                className={styles.FooterLogo}
              />
              <p>Boards build to last.</p>
              <p>Memories made unforgettable.</p>
              <div className={styles.SocialIcons}>
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={30}
                  height={30}
                  className={styles.SocialIcon}
                />
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  width={30}
                  height={30}
                  className={styles.SocialIcon}
                />
                <Image
                  src={XIcon}
                  alt="X"
                  width={30}
                  height={30}
                  className={styles.SocialIcon}
                />
                <Image
                  src={TikTokIcon}
                  alt="TikTok"
                  width={30}
                  height={30}
                  className={styles.SocialIcon}
                />
                <Image
                  src={YoutubeIcon}
                  alt="Youtube"
                  width={30}
                  height={30}
                  className={styles.SocialIcon}
                />

              </div>
            </div>
          </div>
          <div className={styles.FooterLeft}>
            <div className={styles.FooterLeftSection}>
              <h3>Shop</h3>
              <Link href={'#'}>New Arrivals</Link>
              <Link href={'#'}>Best Sellers</Link>
              <Link href={'#'}>Categories</Link>
              <Link href={'#'}>Gift Crads</Link>
              <Link href={'#'}>Sale</Link>
            </div>
            <div className={styles.FooterLeftSection}>
              <h3>Support</h3>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Returns</Link>
              <Link href={'#'}>Order Tracking</Link>
              <Link href={'#'}>Size Guide</Link>
              <Link href={'#'}>Contact</Link>
            </div>
            <div className={styles.FooterLeftSection}>
              <h3>Company</h3>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Sustainability</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>News</Link>
              <Link href={'#'}>Affiliates</Link>
            </div>

          </div>
          <div className={styles.FooterLeft}>
            
          </div>
        </div>

      </div>
    </footer>
  )
}