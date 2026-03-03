export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  rating: number
  thumbnail: string
}

export interface ProductResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}