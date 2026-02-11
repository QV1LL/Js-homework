import { Link } from 'react-router-dom'
import type { ProductCategory } from '../../../entities/product'
import { CategoryDropDown } from '../../../shared'

const navigation = [{ name: 'Home', href: '/' }]
const categories: ProductCategory[] = ['electronics', 'audio', 'accessories', 'peripherals', 'wearables']

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                        P
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">
                        Products <span className="text-indigo-600">Store</span>
                    </h1>
                </Link>

                <nav className="flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-semibold text-gray-600 hover:text-indigo-600"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <CategoryDropDown categories={categories} />
                </nav>
            </div>
        </header>
    )
}
