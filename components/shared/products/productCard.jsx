import Image from "next/image";
import styles from '~/scss/shared/products/ProductCard.module.scss'

export default function ProductCard({ product }) {


  let priceView = `$${product?.node?.priceRange?.maxVariantPrice?.amount}`;

  if (product?.node?.priceRange?.maxVariantPrice?.amount != product?.node?.priceRange?.minVariantPrice?.amount) {
    priceView = `$${product?.node?.priceRange?.maxVariantPrice?.amount} - $${product?.node?.priceRange?.minVariantPrice?.amount}`
  }

  return (
    <div className={styles.productCardContainer}>
      <Image
        src={product?.node?.featuredImage?.url}
        alt={product?.node?.featuredImage?.altText}
        width={400}
        height={400}
        className={styles.thumbnail}
      />
      
      <div>
        {product?.node?.title}
      </div>
      <div>
        {priceView}
      </div>


    </div>
  )
}