'use client'
import ProductCard from "~/components/shared/products/productCard";
import styles from '~/scss/pages/Home/Page.module.scss'
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

export default function FeaturedProducts({ collection }) {

  let shopProducts = collection?.products?.edges?.length > 0 ? collection?.products?.edges : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.cardSectionCards}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  return (
    <div>
      <h2>Quality boards</h2>
      <div className={`${styles.homeCollection} embla__viewport`}>
        {
          shopProducts.map((prod) => (<ProductCard product={prod} key={prod.node.id} />))
        }
      </div>
    </div>
  )
}