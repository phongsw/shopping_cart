interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IProductItem {
  id: number
  title?: string
  description?: string
  price: number
  category?: ICategory
  images?: string
  quantity: number
}