import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/pages/Home/Hero.module.scss'

export default function Hero2() {
  return (
    <div className={styles.hero2Container} >
      <div>

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