import axios from "axios"
import type { ProductResponse, Product } from "../types/Product"

const API_URL = "https://dummyjson.com/products"

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<ProductResponse>(API_URL)
  return response.data.products
}

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/${id}`)
  return response.data
}