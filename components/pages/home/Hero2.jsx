import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/pages/Home/Hero.module.scss'

export default function Hero2() {
  return (
    <div className={styles.hero2Container} >
      <div>
        <h1>Give Your Tech Another Life.</h1>
        <h3>Fast, Professional phone, tablet and computer repair -without the upsell</h3>
        <ul>
          <li>Honest Daignostics</li>
          <li>Fair Pricing</li>
          <li>Quality Service</li>
        </ul>
        <button>Book a repair</button>
      </div>
      <div>

        <Image
          src={'/devices/BrokenPhone.png'}
          alt="pexels-fede-roveda-16-9"
          width={300}
          height={600}
          // fill={true}
          objectFit={"cover"}
          className={styles.img}
          priority="preload"
        />
      </div>

    </div>
  )
}