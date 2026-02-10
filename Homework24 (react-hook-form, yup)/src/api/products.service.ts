import axios from 'axios'
import type { Product } from '../types/product'
import api from './api'

const ProductsService = {
    getAllFiltered: async (search: string): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>(`/products`, {
                params: {
                    name_like: search ? encodeURIComponent(search) : undefined,
                },
            })
            return response.data
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('Failed to fetch products')
            }
            return []
        }
    },
    delete: async (id: string) => {
        try {
            await api.delete<Product[]>(`/products/${id}`)
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('Failed to delete product')
            }
        }
    },
    add: async (product: Product) => {
        try {
            const response = await api.post<Product>(`/products`, { ...product, id: undefined })
            return response.data
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('Failed to add product')
            }
        }
    },
    put: async (product: Product) => {
        try {
            await api.put(`/products/${product.id}`, product)
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('Failed to edit product')
            }
        }
    },
}

export default ProductsService
