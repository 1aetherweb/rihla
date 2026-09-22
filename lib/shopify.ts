import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const shopify = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: "2025-01",
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
});

export async function getProducts() {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            variants(first: 10) {
              edges {
                node {
                  id
                  price {
                    amount
                  }
                  availableForSale
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            tags
            description
          }
        }
      }
    }
  `;

  const { data } = await shopify.request(query);
  return data.products.edges.map(({ node }: any) => ({
    id: node.handle,
    name: node.title,
    price: parseFloat(node.variants.edges[0].node.price.amount),
    image: node.images.edges[0]?.node.url ?? "",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: node.description,
    sold_out: !node.variants.edges[0].node.availableForSale,
    tag: node.tags[0] ?? undefined,
    variantId: node.variants.edges[0].node.id,
  }));
}

export async function createCheckout(variantId: string, quantity: number) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const { data, errors } = await shopify.request(query, {
    variables: {
      input: {
        lines: [{ quantity, merchandiseId: variantId }]
      }
    }
  });

  console.log("Cart data:", JSON.stringify(data));
  console.log("API errors:", JSON.stringify(errors));
  console.log("User errors:", JSON.stringify(data?.cartCreate?.userErrors));
  console.log("VariantId used:", variantId);

  if (errors) throw new Error(JSON.stringify(errors));
  if (data?.cartCreate?.userErrors?.length > 0) throw new Error(JSON.stringify(data.cartCreate.userErrors));
  if (!data?.cartCreate?.cart) throw new Error("No cart created");

  return data.cartCreate.cart.checkoutUrl;
}