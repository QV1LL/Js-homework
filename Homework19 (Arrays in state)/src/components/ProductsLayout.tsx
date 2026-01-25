import { useState } from 'react'

interface Product {
    id: string
    title: string
    price: number
}

const initialProducts: Product[] = [
    { id: '1', title: 'Wireless Headphones', price: 99 },
    { id: '2', title: 'Mechanical Keyboard', price: 149 },
    { id: '3', title: 'Gaming Mouse', price: 59 },
    { id: '4', title: '4K Monitor', price: 329 },
    { id: '5', title: 'USB-C Dock', price: 89 },
    { id: '6', title: 'Smart Watch', price: 199 },
    { id: '7', title: 'Portable SSD', price: 129 },
    { id: '8', title: 'Webcam 1080p', price: 79 },
    { id: '9', title: 'Studio Microphone', price: 159 },
    { id: '10', title: 'Ergonomic Chair', price: 299 },
]

type SearchBarProps = {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value)
    }

    return (
        <input
            value={searchTerm}
            onInput={handleInput}
            type="search"
            placeholder="Search..."
            className="w-full max-w-sm px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
        ></input>
    )
}

type ProductListProps = {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <ul className="flex flex-col gap-1 p-3">
            {products.map((product) => {
                return (
                    <li className="hover:font-bold" key={product.id}>
                        - {product.title}, {product.price}$
                    </li>
                )
            })}
        </ul>
    )
}

const ProductsLayout = () => {
    const [productsToShow, setProductsToShow] = useState<Product[]>(initialProducts)
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSearch = () => {
        setProductsToShow(initialProducts.filter((product) => product.title.includes(searchTerm)))
    }

    return (
        <>
            <div className="flex gap-3">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <button
                    className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <ProductList products={productsToShow} />
        </>
    )
}

export default ProductsLayout
