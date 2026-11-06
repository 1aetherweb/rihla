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
  variants?: { [size: string]: string };
}

const gid = (id: string) => `gid://shopify/ProductVariant/${id}`;

export const products: Product[] = [
  {
    id: "presence-hoodie-dusk",
    name: "dusk hoodie",
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dusk-2.webp",
    images: ["/products/dusk-2.webp", "/products/dusk-1.png", "/products/dusk-3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "65% cotton, 35% polyester. Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variants: {
      XS: gid("68064496189594"),
      S:  gid("49300744208538"),
      M:  gid("68064496091290"),
      L:  gid("68064496124058"),
      XL: gid("68064496156826"),
    },
  },
  {
    id: "presence-hoodie-dawn",
    name: "dawn hoodie",
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dawn-3.webp",
    images: ["/products/dawn-3.webp", "/products/dawn-5.png", "/products/dawn-4.webp"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "65% cotton, 35% polyester. Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variants: {
      XS: gid("49300798701722"),
      S:  gid("68064487866522"),
      M:  gid("68064487833754"),
      L:  gid("68064487800986"),
      XL: gid("68064487768218"),
    },
  },
  {
    id: "presence-hoodie-dune",
    name: "dune hoodie",
    price: 64.99,
    tag: "BESTSELLER",
    image: "/products/dune-new-1.jpg",
    images: ["/products/dune-new-1.jpg", "/products/dune-new-2.jpg", "/products/dune-new-3.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "100% cotton. Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
    variants: {
      XS: gid("49300805877914"),
      S:  gid("68064480821402"),
      M:  gid("68064480755866"),
      L:  gid("68064480788634"),
      XL: gid("68064480723098"),
    },
  },
];
