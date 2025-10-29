'use client'
import ProductCard from "~/components/shared/products/productCard";
import styles from '~/scss/pages/Home/Page.module.scss'
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

export default function MainRepairCards({ collection }) {

  // let shopProducts = collection?.products?.edges?.length > 0 ? collection?.products?.edges : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.cardSectionCards}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  let shopProducts = [
    {
      imgUrl: '/devices/iphones.png',
      title: 'Phone',
      slug: 'phone',
    },
    {
      imgUrl: '/devices/iPad_mini.png',
      title: 'Tablet',
      slug: 'tablets',
    },
    {
      imgUrl: '/devices/macbook2.png',
      title: 'Computer',
      slug: '',
    },
    {
      imgUrl: '/devices/switch.png',
      title: 'Game Console',
      slug: 'console',
    },
  ]

  return (
    <div>
      <h2>Choose</h2>
      <div className={`${styles.homeCollection} embla__viewport`}>
        {
          shopProducts.map((prod) => (<ProductCard product={prod} key={prod.title} />))
        }
      </div>
    </div>
  )
}