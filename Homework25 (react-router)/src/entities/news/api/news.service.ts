import { api } from '../../../shared'
import type { News } from '../model/types'

export const NewsService = {
    getAll: async (): Promise<News[]> => {
        try {
            const response = await api.get('/news')
            return response.data.map((item: { createdAt: string }) => ({
                ...item,
                createdAt: new Date(item.createdAt),
            }))
        } catch {
            return []
        }
    },
    getById: async (id: string): Promise<News | null> => {
        try {
            const response = await api.get(`/news/${id}`)
            return {
                ...response.data,
                createdAt: new Date(response.data.createdAt),
            }
        } catch {
            return null
        }
    },
}
