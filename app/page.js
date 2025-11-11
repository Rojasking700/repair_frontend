import Image from "next/image";
import Contact from "~/components/pages/home/Contact";
import FeaturedProducts from "~/components/pages/home/FeatruedProducts";
import Gallery from "~/components/pages/home/Gallery";
// import styles from "./page.module.css";
import Hero from "~/components/pages/home/Hero";
import MainRepairCards from "~/components/pages/home/MainRepairCards";
import { getCollection } from "~/repositories/productRepo";
import styles from '~/scss/pages/Home/Page.module.scss'

export default async function Home() {

  let collection = await getCollection();

  return (
    <div className={styles.page}>
      <main className={`${styles.main}`}>

        <Hero />
        <Contact />
        {/* <MainRepairCards /> */}
        {/* <Gallery /> */}

        <div>
          <h1>Request A Quote!</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScPlf4PXQADIrYFPt_elmW0wYU52gmRkHg2GyB_leEzr-zzZw/viewform?usp=dialog"
            width="100%"
            height="500px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </div>
        <br />

      </main>

    </div>
  );
}
