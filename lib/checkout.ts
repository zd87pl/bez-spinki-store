import { shopifyClient } from "./shopify";

export async function createShopifyCheckout(lineItems: { variantId: string; quantity: number }[]) {
  if (!shopifyClient) {
    console.error("Shopify client not initialized");
    return null;
  }

  const { data, errors } = await shopifyClient.request(
    `#graphql
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
        input: {
          lineItems,
        },
      },
    }
  );

  if (errors) {
    console.error("Checkout errors:", errors);
    return null;
  }

  return data?.checkoutCreate?.checkout?.webUrl || null;
}
