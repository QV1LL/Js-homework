import { useEffect, useRef, useState } from 'react'
import type { Product } from '../types/product'
import ProductsService from '../api/products.service'
import Products from '../components/Products'
import EditProductModal from '../components/EditProductModal'

const DEBOUNCE_TIME = 300

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [editProductId, setEditProductId] = useState<string>('')
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')

    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await ProductsService.getAllFiltered(searchInput)
            setProducts(data)
        }
        fetchProducts()
    }, [searchInput])

    const handleAddClick = () => {
        setIsAdding(true)
        setEditProductId('')
        setIsEditModalOpen(true)
    }

    const handleSubmit = async (productData: Product) => {
        try {
            if (isAdding) {
                const newProduct = await ProductsService.add(productData)
                setProducts((prev) => [...prev, newProduct || productData])
            } else {
                await ProductsService.put(productData)
                setProducts((prev) => prev.map((p) => (p.id === productData.id ? productData : p)))
            }
            setIsEditModalOpen(false)
        } catch (error) {
            console.error('Submission failed', error)
        }
    }

    const handleEdit = (id: string) => {
        setIsAdding(false)
        setEditProductId(id)
        setIsEditModalOpen(true)
    }

    const handleDelete = async (id: string) => {
        try {
            await ProductsService.delete(id)
            setProducts((prev) => prev.filter((p) => p.id !== id))
        } catch (error) {
            console.error('Delete failed:', error)
        }
    }

    const handleModalClose = () => {
        setIsEditModalOpen(false)
    }

    const handleInput = (value: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        timeoutRef.current = setTimeout(() => {
            setSearchInput(value)
        }, DEBOUNCE_TIME)
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Products Management</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    onInput={(e) => handleInput(e.currentTarget.value)}
                    className="w-full max-w-sm px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
                <button
                    onClick={handleAddClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm"
                >
                    + Add Product
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <Products products={products} onDelete={handleDelete} onEdit={handleEdit} />
            </div>

            <EditProductModal
                isAdding={isAdding}
                product={products.find((p) => p.id === editProductId)}
                isOpen={isEditModalOpen}
                onSubmit={handleSubmit}
                onClose={handleModalClose}
            />
        </div>
    )
}

export default ProductsPage
