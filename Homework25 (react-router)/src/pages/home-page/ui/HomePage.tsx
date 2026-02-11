import { useState } from 'react'
import { ProductsList } from '../../../widgets/products-list'
import { NewsList } from '../../../widgets/news-list'

type Tab = 'products' | 'news'

export const HomePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('products')

    return (
        <main className="container mx-auto max-w-7xl px-4 py-8">
            <div className="mb-12 flex flex-col items-center border-b border-gray-100 pb-8">
                <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900">
                    Explore <span className="text-indigo-600">Store</span>
                </h1>

                <div className="inline-flex rounded-xl bg-gray-100 p-1">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                            activeTab === 'products'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('news')}
                        className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${
                            activeTab === 'news'
                                ? 'bg-white text-indigo-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Latest News
                    </button>
                </div>
            </div>

            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-black capitalize text-gray-900">{activeTab}</h2>
                    <span className="text-sm font-medium text-gray-400">Viewing all entries</span>
                </div>

                {activeTab === 'products' ? <ProductsList /> : <NewsList />}
            </section>
        </main>
    )
}
