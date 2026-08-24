export interface Product {
  id: string;
  name: string;
  price: number;
  tag?: string;
  image: string;
  sizes: string[];
  description: string;
  sold_out?: boolean;
}

export const products: Product[] = [
  {
    id: "voyage-hoodie-black",
    name: "Voyage Hoodie — Black",
    price: 130,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
  },
  {
    id: "voyage-hoodie-sand",
    name: "Voyage Hoodie — Sand",
    price: 130,
    tag: "NEW DROP",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Brushed fleece interior. Dropped shoulders. Embroidered chest logo.",
  },
  {
    id: "nomad-hoodie-grey",
    name: "Nomad Hoodie — Grey",
    price: 140,
    tag: "LIMITED",
    image: "https://images.unsplash.com/photo-1611911813383-67769b37a149?w=600&q=80",
    sizes: ["S", "M", "L", "XL"],
    description: "French terry cotton blend. Oversized fit. Tonal RIHLA embroidery.",
  },
  {
    id: "nomad-hoodie-black",
    name: "Nomad Hoodie — Black",
    price: 140,
    sold_out: true,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
    sizes: ["S", "M", "L", "XL"],
    description: "French terry cotton blend. Oversized fit. Tonal RIHLA embroidery.",
  },
];
