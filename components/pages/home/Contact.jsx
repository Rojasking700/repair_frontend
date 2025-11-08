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
      <h1>Contact for qoute</h1>
      <h2>(262)-909-5892</h2>
      <h2>grojaspiano@gmail.com</h2>
    </div>
  )
}