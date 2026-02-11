import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Product } from './types'
import { ProductsService } from '../api/products.service'
import { ProductContext } from './context'

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await ProductsService.getAll()
                setProducts(data)
            } catch {
                setError('Something went wrong while loading products')
            } finally {
                setIsLoading(false)
            }
        }

        loadProducts()
    }, [])

    const value = { products, isLoading, error }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
