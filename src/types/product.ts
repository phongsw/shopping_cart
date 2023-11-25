export declare namespace FlowiseProduct {
  interface IProductItem {
    id: number
    title: string
    description: string
    price: number
    rating: number
    brand: string
    category: string
    images: string[]
  }


  export type ProductList = IProductItem[]
}
