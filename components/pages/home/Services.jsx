
import styles from '~/scss/pages/Home/Page.module.scss'
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons, UseDotButton } from '~/components/shared/embla/EmblaButtons';

export default function Services({ collection }) {

  let servicesArr = [
    {
      title: 'Smartphone Repair',
    },
    {
      title: 'Tablet Repair',
    },
    {
      title: 'Game Console Repair',
    },
    {
      title: 'Buy or Sell Used Devices',
    },
  ]

  return (
    <div>
      {/* img */}
      <h2>Services We Offer</h2>
      {
        servicesArr.map((service) => (
          <div>
            <h4>{service.title}</h4>
            {/* <h5>(262)-909-5892</h5> */}
          </div>
        ) )
      }
    </div>
  )
}