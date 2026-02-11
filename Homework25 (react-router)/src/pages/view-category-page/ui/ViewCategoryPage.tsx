import { useParams } from 'react-router-dom'
import { ProductCard, useProducts } from '../../../entities/product'
import { ErrorMessage, Loader } from '../../../shared'

export const ViewCategoryPage = () => {
    const { products, isLoading, error } = useProducts()
    const { category } = useParams()
    const categoryProducts = products.filter((product) => product.category === category)

    if (isLoading) return <Loader />

    if (error) return <ErrorMessage message={error} />

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-xl text-gray-500">No products found</p>
            </div>
        )
    }

    return (
        <section className="p-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">Products ({category})</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
