export interface Product {
  id: string;
  name: string;
  price: number;
  tag?: string;
  image: string;
  images?: string[];
  sizes: string[];
  description: string;
  sold_out?: boolean;
  variantId?: string;
}

export const products: Product[] = [
  {
    id: "presence-hoodie-dusk",
    name: "dusk hoodie",
    price: 60,
    tag: "BESTSELLER",
    image: "/products/dusk-2.webp",
    images: ["/products/dusk-2.webp", "/products/dusk-1.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300744208538",
  },
  {
    id: "presence-hoodie-dawn",
    name: "dawn hoodie",
    price: 60,
    tag: "BESTSELLER",
    image: "/products/dawn-4.webp",
    images: ["/products/dawn-4.webp", "/products/dawn-1.png", "/products/dawn-2.png", "/products/dawn-3.webp"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300798701722",
  },
  {
    id: "presence-hoodie-dune",
    name: "dune hoodie",
    price: 60,
    tag: "BESTSELLER",
    image: "/products/dune-2.webp",
    images: ["/products/dune-2.webp", "/products/dune-1.png", "/products/dune-3.webp"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300805877914",
  },
];
