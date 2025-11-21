'use client'
import ProductCard from "~/components/shared/products/productCard";
import styles from '~/scss/pages/Home/Page.module.scss'
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

export default function Contact({ collection }) {

  // let shopProducts = collection?.products?.edges?.length > 0 ? collection?.products?.edges : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', container: `.${styles.cardSectionCards}`, })
  const { PrevButton, NextButton, } = usePrevNextButtons(emblaApi);

  let shopProducts = [

  ]

  return (
    <div>
      <h2>Contact Info</h2>
      <h3>(262)-909-5892</h3>
      <h3>grojaspiano@gmail.com</h3>
    </div>
  )
}