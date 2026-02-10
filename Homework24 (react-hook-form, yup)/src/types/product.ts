export type ProductCategory = 'electronics' | 'clothes' | 'books'

export interface Product {
    id: string
    name: string
    price: number
    category: ProductCategory
    description?: string
    inStock?: boolean
}
