export const PRODUCT_CATEGORIES = [
    'Electronics',
    'Software',
    'Furniture',
    'Services',
    'Marketing',
    'Legal',
    'Human Resources',
    'Hardware',
] as const

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]

export interface Product {
    id: string
    name: string
    price: number
    category: ProductCategory
    inStock: boolean
}
