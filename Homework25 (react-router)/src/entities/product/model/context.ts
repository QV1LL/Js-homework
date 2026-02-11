import { createContext, useContext } from 'react'
import type { Product } from './types'

interface ProductContextValue {
    products: Product[]
    isLoading: boolean
    error: string | null
}

export const ProductContext = createContext<ProductContextValue | undefined>(undefined)

export const useProducts = () => {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider')
    }
    return context
}

export const useProductById = (id: string | undefined) => {
    const context = useContext(ProductContext)

    if (!context) {
        throw new Error('useProductById must be used within a ProductProvider')
    }

    const product = context.products.find((p) => p.id === id)

    return {
        product,
        isLoading: context.isLoading,
        error: context.error,
    }
}
