import { useParams, useNavigate } from 'react-router-dom'
import { useNewsById } from '../../../entities/news'
import { ErrorMessage, Loader } from '../../../shared'

export const ViewNewsPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { news, isLoading, error } = useNewsById(id)

    if (isLoading) return <Loader />
    if (error) return <ErrorMessage message={error} />

    if (!news) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900">News not found</h2>
                <button onClick={() => navigate('/')} className="mt-4 text-indigo-600 hover:underline">
                    Back to home
                </button>
            </div>
        )
    }

    const formattedDate = news.createdAt.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <main className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
            <button
                onClick={() => navigate(-1)}
                className="group mb-8 flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-indigo-600"
            >
                <svg
                    className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to list
            </button>

            <article>
                <header className="mb-10 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <time className="text-sm font-medium text-gray-400">{formattedDate}</time>
                        <span className="h-1 w-1 rounded-full bg-gray-300" />
                        <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                            Announcements
                        </span>
                    </div>

                    <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                        {news.title}
                    </h1>
                </header>

                <div className="prose prose-indigo prose-lg mx-auto">
                    <p className="whitespace-pre-wrap text-xl leading-relaxed text-gray-700">{news.text}</p>
                </div>

                <footer className="mt-16 border-t border-gray-100 pt-10">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                PS
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Products Store Team</p>
                                <p className="text-xs text-gray-500">Official Editorial</p>
                            </div>
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-sm font-bold text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                            Back to top ↑
                        </button>
                    </div>
                </footer>
            </article>
        </main>
    )
}
