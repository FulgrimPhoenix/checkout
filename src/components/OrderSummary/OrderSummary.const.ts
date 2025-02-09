import { IProduct } from "~features/product/product.types";

export const PRODUCT_LIST: IProduct[] = [
  { title: "Product 1", description: "A nice thing", price: 9.99 },
  { title: "Product 2", description: "Another thing", price: 3.45 },
  { title: "Product 3", description: "Something else", price: 6.51 },
  { title: "Product 4", description: "Best thing of all", price: 14.11 },
  { title: "Shipping", price: 0 },
];

export const PAYMENT_INFO = [
  {
    title: "Card type",
    info: "Visa",
  },
  {
    title: "Card holder",
    info: "Mr John Smith",
  },
  {
    title: "Card number",
    info: "xxxx-xxxx-xxxx-1234",
  },
  {
    title: "Expiry date",
    info: "04/2024",
  },
];
