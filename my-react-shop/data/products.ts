export interface Product {
  name: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    name: "jacket",
    price: 500,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    name: "pants",
    price: 300,
    image: require("../assets/images/pants.jpg"),
  },
  {
    name: "skirt",
    price: 250,
    image: require("../assets/images/skirt.jpg"),
  },
];
