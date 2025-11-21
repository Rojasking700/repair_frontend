import Image from "next/image";
import Link from "next/link";
import styles from '~/scss/shared/products/ProductCard.module.scss'

export default function ProductCard({ product }) {


  let priceView = `$${product?.node?.priceRange?.maxVariantPrice?.amount}`;

  if (product?.node?.priceRange?.maxVariantPrice?.amount != product?.node?.priceRange?.minVariantPrice?.amount) {
    priceView = `$${product?.node?.priceRange?.maxVariantPrice?.amount} - $${product?.node?.priceRange?.minVariantPrice?.amount}`
  }

  return (
    <Link href={`/${product.slug}`}>
      <div className={styles.productCardContainer}>
        <Image
          src={product?.imgUrl}
          alt={product?.title}
          width={250}
          height={250}
          className={styles.thumbnail}
          priority="preload"
        />

        <div>
          {product?.title} repair
        </div>
        {/* <div>
        {priceView}
      </div> */}


      </div>
    </Link>
  )
}