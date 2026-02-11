import { useState, useEffect, type ReactNode, useMemo } from 'react'
import type { News } from './types'
import { NewsService } from '../api/news.service'
import { NewsContext } from './context'

export const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [news, setNews] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await NewsService.getAll()
                setNews(data)
            } catch {
                setError('Failed to load news')
            } finally {
                setIsLoading(false)
            }
        }
        loadNews()
    }, [])

    const value = useMemo(() => ({ news, isLoading, error }), [news, isLoading, error])

    return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
}
