import { IProductItem } from "@/types/product"

// calculate totalPrice
export const calculateTotalPrice = (products: IProductItem[]): number => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0)
}