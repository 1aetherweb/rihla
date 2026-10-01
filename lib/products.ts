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
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dusk-2.webp",
    images: ["/products/dusk-2.webp", "/products/dusk-1.png", "/products/dusk-3.jpg", "/products/dusk-4.png"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300744208538",
  },
  {
    id: "presence-hoodie-dawn",
    name: "dawn hoodie",
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dawn-3.webp",
    images: ["/products/dawn-3.webp", "/products/dawn-5.png", "/products/dawn-4.webp"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300798701722",
  },
  {
    id: "presence-hoodie-dune",
    name: "dune hoodie",
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dune-new-1.jpg",
    images: ["/products/dune-new-1.jpg", "/products/dune-new-2.jpg", "/products/dune-new-3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300805877914",
  },
];
