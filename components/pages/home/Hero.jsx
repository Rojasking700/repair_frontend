import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/pages/Home/Hero.module.scss'

export default function Hero(){
  return (
    <div className={styles.heroContainer}>
      <Image 
        // src={'/stockImgs/BrokenPhoneStreet.jpg'}
        // src={'/hero/Crop_Repair_Hero.png'}
        src={'/hero/iPhones-unsplash.jpg'}
        alt="pexels-fede-roveda-16-9"
        width={1200}
        height={600}
        // fill={true}
        objectFit={"cover"}
        className={styles.img}
      />
      
      <div className={styles.titleContainer}>
        <h1>Restore your device</h1>
        {/* <h2>A new life</h2> */}
        {/* <Link href={`/`} >
          Repair Now
        </Link> */}
      </div>
    </div>
  )
}