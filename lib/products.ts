export type Product = {
  slug: string;
  title: string;
  price: string;
  specs: { label: string; value: string }[];
  photos: string[];
  published: boolean;
};

export const products: Product[] = [
  // {
  //   slug: "ejemplo",
  //   title: "ejemplo",
  //   price: "$0",
  //   specs: [{ label: "estado", value: "bueno" }],
  //   photos: ["/sale/ejemplo-1.jpg"],
  //   published: true,
  // },
];

export function publishedProducts(): Product[] {
  return products.filter((product) => product.published);
}
