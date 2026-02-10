import { createPortal } from 'react-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import type { Product, ProductCategory } from '../types/product'
import { useEffect } from 'react'

const productSchema: yup.ObjectSchema<Product> = yup.object({
    id: yup.string().default('').defined(),
    name: yup.string().min(3, 'Must be at least 3 symbols').required('Enter a name'),
    price: yup
        .number()
        .typeError('Price must be a number')
        .positive('Price must be positive')
        .required('Enter a price'),
    category: yup
        .string()
        .oneOf(['electronics', 'clothes', 'books'] as const, 'Choose a valid category')
        .required('Choose the category') as yup.Schema<ProductCategory>,
    description: yup.string().max(200, 'Too much text').optional(),
    inStock: yup.boolean().default(true).defined(),
})

interface Props {
    isAdding: boolean
    product?: Product
    isOpen: boolean
    onClose: () => void
    onSubmit: SubmitHandler<Product>
}

const EditProductModal = ({ isAdding, product, isOpen, onClose, onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Product>({
        resolver: yupResolver(productSchema),
        defaultValues: {
            name: '',
            price: 0,
            category: '' as ProductCategory,
            description: '',
            inStock: true,
        },
    })

    useEffect(() => {
        if (isOpen) {
            reset(
                isAdding
                    ? { name: '', price: 0, category: '' as ProductCategory, description: '', inStock: true }
                    : product,
            )
        }
    }, [product, isAdding, reset, isOpen])

    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[50] backdrop-blur-sm">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-5 text-gray-800">
                    {isAdding ? 'Додати товар' : 'Редагувати товар'}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Назва</label>
                        <input
                            {...register('name')}
                            className={`w-full border p-2 rounded-lg text-sm outline-none transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-blue-500 focus:ring-1 focus:ring-blue-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Ціна</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register('price')}
                                className={`w-full border p-2 rounded-lg text-sm outline-none ${errors.price ? 'border-red-500' : 'focus:border-blue-500'}`}
                            />
                            {errors.price && <p className="text-red-500 text-[11px] mt-1">{errors.price.message}</p>}
                        </div>

                        <div className="flex-1">
                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                                Категорія
                            </label>
                            <select
                                {...register('category')}
                                className={`w-full border p-2 rounded-lg text-sm bg-white outline-none ${errors.category ? 'border-red-500' : 'focus:border-blue-500'}`}
                            >
                                <option value="electronics">Electronics</option>
                                <option value="clothes">Clothes</option>
                                <option value="books">Books</option>
                            </select>
                            {errors.category && (
                                <p className="text-red-500 text-[11px] mt-1">{errors.category.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Опис</label>
                        <textarea
                            {...register('description')}
                            className="w-full border p-2 rounded-lg text-sm h-20 resize-none focus:border-blue-500 outline-none"
                        />
                    </div>

                    <label className="flex items-center gap-3 text-sm cursor-pointer py-1">
                        <input
                            type="checkbox"
                            {...register('inStock')}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700 font-medium">В наявності</span>
                    </label>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-md shadow-blue-200 transition-all active:scale-95"
                        >
                            {isAdding ? 'Створити' : 'Зберегти'}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body,
    )
}

export default EditProductModal
