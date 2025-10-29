import { shopifyClient } from "~/lib/shopify";
import { collectionsQuery } from "./queries/productQueries";

export const getCollection = async () => {

  let colsQuery = collectionsQuery

  let getCol = await shopifyClient.request(colsQuery, {
    variables: { handle: 'automated-collection', first: 21, after: null },
  }).then(({ data, extensions }) => {

    return data.collection
  }).catch((error) => {
    console.error(error);
    return [];
  })

  return getCol;

}
