export type ProductCategory = 'all' | 'electronics' | 'accessories' | 'peripherals' | 'audio' | 'wearables'

export interface Product {
    id: string
    title: string
    description?: string
    price: number
    category: ProductCategory
    imageUrl?: string
}
