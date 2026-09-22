export interface Product {
  id: string;
  name: string;
  price: number;
  tag?: string;
  image: string;
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
    image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300744208538",
  },
  {
    id: "presence-hoodie-dawn",
    name: "dawn hoodie",
    price: 60,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300798701722",
  },
  {
    id: "presence-hoodie-dune",
    name: "dune hoodie",
    price: 60,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variantId: "gid://shopify/ProductVariant/49300805877914",
  },
];
