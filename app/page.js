import Image from "next/image";
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
        <MainRepairCards />
        {/* <Gallery /> */}
        <br/>
      </main>

    </div>
  );
}
