import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

export const shopifyClient =
  domain && token
    ? createStorefrontApiClient({
        storeDomain: `https://${domain}`,
        apiVersion: "2024-04",
        publicAccessToken: token,
      })
    : null;

export async function fetchShopifyProducts(limit = 50) {
  if (!shopifyClient) return [];
  const { data, errors } = await shopifyClient.request(
    `#graphql
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 2) {
              edges { node { url altText } }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price { amount currencyCode }
                  compareAtPrice { amount currencyCode }
                }
              }
            }
            collections(first: 5) {
              edges { node { title handle } }
            }
          }
        }
      }
    }`,
    { variables: { first: limit } }
  );
  if (errors) {
    console.error("Shopify errors:", errors);
    return [];
  }
  return (
    data?.products?.edges?.map((e: any) => e.node) || []
  );
}
