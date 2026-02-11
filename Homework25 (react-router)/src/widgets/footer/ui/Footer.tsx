import { Link } from 'react-router-dom'
import { CategoryDropDown } from '../../../shared'
import type { ProductCategory } from '../../../entities/product'

const categories: ProductCategory[] = ['electronics', 'audio', 'accessories', 'peripherals', 'wearables']

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-gray-400 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">P</span>
                        </div>
                        <span className="text-lg font-semibold text-gray-900">
                            Products <span className="text-indigo-600">Store</span>
                        </span>
                    </div>

                    <nav className="flex gap-6 text-sm font-medium text-gray-500">
                        <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-indigo-600">
                            Home
                        </Link>
                        <CategoryDropDown categories={categories} />
                    </nav>

                    <p className="text-sm text-gray-400">© {currentYear} All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
