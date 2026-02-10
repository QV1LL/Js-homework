import type { Product } from '../types/product'

type ProductsProps = {
    products: Product[]
    onDelete: (id: string) => void
    onEdit: (id: string) => void
}

const Products = ({ products, onDelete, onEdit }: ProductsProps) => {
    return (
        <ul className="max-w-4xl mx-auto p-6 space-y-8">
            {products.map((product) => (
                <li
                    key={product.id}
                    className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 group"
                >
                    <div className="flex gap-5 place-items-center">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                            <p className="text-gray-500 text-sm max-w-md mt-1">{product.description}</p>
                        </div>
                        {product.inStock && <p className="text-sky-600 text-sm">In stock</p>}
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center gap-6">
                        <span className="text-lg font-semibold">${product.price}</span>
                        <button onClick={() => onEdit(product.id)}>Edit</button>
                        <button onClick={() => onDelete(product.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Products
