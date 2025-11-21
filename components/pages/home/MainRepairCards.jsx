'use client'
import ProductCard from "~/components/shared/products/productCard";
import styles from '~/scss/pages/Home/Page.module.scss'

export default function MainRepairCards({ collection }) {

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
      <h2>All Devices Serviced</h2>
      <div className={`${styles.homeCollection} `}>
        {
          shopProducts.map((prod) => (<ProductCard product={prod} key={prod.title} />))
        }
      </div>
    </div>
  )
}