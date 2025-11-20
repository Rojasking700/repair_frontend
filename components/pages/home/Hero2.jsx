import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/pages/Home/Hero.module.scss'

export default function Hero2() {
  return (
    <div className={styles.hero2Container} >
      <div className={styles.hero2ContainerLeft} >
        <h1>Give Your Tech</h1>
        <h1>Another Life.</h1>
        <br />
        <h3>Fast, Professional phone, tablet and computer repair</h3>
        <br />
        <ul>
          <li>Honest Daignostics</li>
          <li>Fair Pricing</li>
          <li>Quality Service</li>
        </ul>
        <br />
        <Link href="#RequestQuote" className={styles.hero2ContainerLeftLinkButton} >
          Request a qoute
        </Link>
      </div>
      <div>

        <Image
          src={'/devices/BrokenPhone.png'}
          alt="pexels-fede-roveda-16-9"
          width={250}
          height={500}
          // fill={true}
          objectFit={"cover"}
          className={`${styles.img}`} 
          priority="preload"
           sizes="(max-width: 480px) 200px,
         (max-width: 1200px) 50vw,
         33vw"
        />
      </div>

    </div>
  )
}