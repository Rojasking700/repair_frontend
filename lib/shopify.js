import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeName = process.env.shopifyStoreName;
const shpat = process.env.shopifyPublicAccessToken;

export const shopifyClient = createStorefrontApiClient({
  storeDomain: `http://${storeName}.myshopify.com`,
  apiVersion: '2025-07',
  publicAccessToken: `${shpat}`,
});
