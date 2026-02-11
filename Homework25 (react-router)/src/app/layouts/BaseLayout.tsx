import { Outlet } from 'react-router-dom'
import { Footer } from '../../widgets/footer'
import { Header } from '../../widgets/header'
import { ProductsProvider } from '../../entities/product'
import { NewsProvider } from '../../entities/news'

export const BaseLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <NewsProvider>
                <ProductsProvider>
                    <Header />

                    <main className="mx-auto flex-grow max-w-[1200px]">
                        <Outlet />
                    </main>

                    <Footer />
                </ProductsProvider>
            </NewsProvider>
        </div>
    )
}
