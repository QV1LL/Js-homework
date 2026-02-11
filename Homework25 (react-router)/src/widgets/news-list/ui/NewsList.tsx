import { NewsCard, useNews } from '../../../entities/news'
import { Loader, ErrorMessage } from '../../../shared'

export const NewsList = () => {
    const { news, isLoading, error } = useNews()

    if (isLoading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    if (news.length === 0) return <p className="text-center py-10 text-gray-500">No news found</p>

    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    )
}
