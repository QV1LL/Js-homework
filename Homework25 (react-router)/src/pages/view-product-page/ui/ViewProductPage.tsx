import { useParams, useNavigate } from 'react-router-dom'
import { useProductById } from '../../../entities/product'
import { ErrorMessage, Loader } from '../../../shared'

export const ViewProductPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { product, isLoading, error } = useProductById(id)

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    if (isLoading) return <Loader />

    if (error) return <ErrorMessage message={error} />

    if (!product) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                <button onClick={handleHomeClick} className="mt-4 text-indigo-600 hover:underline">
                    Back to home
                </button>
            </div>
        )
    }

    return (
        <main className="container mx-auto px-4 py-8 md:py-16">
            <button
                onClick={handleBackClick}
                className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back
            </button>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                    <img
                        src={product.imageUrl || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                <div className="flex flex-col">
                    <div className="mb-6 border-b border-gray-100 pb-6">
                        <span className="mb-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600">
                            {product.category}
                        </span>
                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>
                        <p className="mt-4 text-2xl font-black text-gray-900">${product.price.toLocaleString()}</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">Description</h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            {product.description || 'No description available for this premium product.'}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
