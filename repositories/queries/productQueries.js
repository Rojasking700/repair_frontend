
export const collectionsQuery = `
  query ProductsInCollection($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      id
      title
      products(first: $first, after: $after) {
        edges {
          cursor
          node { 
            id 
            title 
            handle
            featuredImage { url altText } 
            priceRange {
              minVariantPrice { amount currencyCode }
              maxVariantPrice { amount currencyCode }
            }
            
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  # sku
                  availableForSale
                  quantityAvailable   # may be null depending on shop settings
                  selectedOptions { name value }
                  # image { url altText width height }
                  price { amount currencyCode }
                  # compareAtPrice { amount currencyCode }
                  unitPrice { amount currencyCode }
                  # unitPriceMeasurement { measuredType referenceUnit }
                  # weight
                  # weightUnit

                }
              }
            }
          }
        }
        pageInfo { hasNextPage }
      }
    }
  }
`
