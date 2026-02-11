import { ProductCard, useProducts } from '../../../entities/product'
import { ErrorMessage, Loader } from '../../../shared'

export const ProductsList = () => {
    const { products, isLoading, error } = useProducts()

    if (isLoading) return <Loader />
    if (error) return <ErrorMessage message={error} />
    if (products.length === 0) return <p className="text-center py-10 text-gray-500">No products found</p>

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
