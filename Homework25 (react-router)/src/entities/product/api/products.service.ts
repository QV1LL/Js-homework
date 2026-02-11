import axios from 'axios'
import type { Product } from '../model/types'
import { api } from '../../../shared'

export const ProductsService = {
    getAll: async (): Promise<Product[]> => {
        try {
            const response = await api.get('/products')
            return response.data
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.log(error.message)
            }
            return []
        }
    },
}
