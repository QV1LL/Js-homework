import { Link } from 'react-router-dom'
import type { News } from '../model/types'

interface NewsCardProps {
    news: News
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    const formattedDate = news.createdAt.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })

    return (
        <article className="group relative flex flex-col items-start rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5">
            <div className="mb-4 flex items-center gap-x-3 text-xs">
                <time dateTime={news.createdAt.toISOString()} className="text-gray-500 font-medium">
                    {formattedDate}
                </time>
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                    Latest News
                </span>
            </div>

            <div className="relative">
                <h3 className="text-lg font-bold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    <Link to={`/news/${news.id}`}>
                        <span className="absolute inset-0" />
                        {news.title}
                    </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{news.text}</p>
            </div>

            <Link
                to={`/news/${news.id}`}
                className="mt-6 flex items-center gap-x-1.5 text-sm font-bold text-indigo-600"
            >
                Read full story
                <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </article>
    )
}
