import { createContext, useContext } from 'react'
import type { News } from './types'

interface NewsContextValue {
    news: News[]
    isLoading: boolean
    error: string | null
}

export const NewsContext = createContext<NewsContextValue | undefined>(undefined)

export const useNews = () => {
    const context = useContext(NewsContext)
    if (!context) throw new Error('useNews must be used within a NewsProvider')
    return context
}

export const useNewsById = (id: string | undefined) => {
    const { news, isLoading, error } = useNews()
    const item = news.find((n) => n.id === id)
    return { news: item, isLoading, error }
}
