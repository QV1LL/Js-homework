import { Link } from 'react-router-dom'
import type { Product } from '../model/types'

type ProductCardProps = { product: Product }

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    src={product.imageUrl || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {product.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 backdrop-blur-sm shadow-sm">
                        {product.category}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex-1">
                    <h3 className="mb-2 text-base font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                        {product.title}
                    </h3>

                    {product.description && (
                        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                    <span className="text-lg font-black text-gray-900">${product.price.toLocaleString()}</span>

                    <Link
                        to={`/product/${product.id}`}
                        className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-indigo-600 active:scale-95"
                    >
                        View
                    </Link>
                </div>
            </div>
        </article>
    )
}
