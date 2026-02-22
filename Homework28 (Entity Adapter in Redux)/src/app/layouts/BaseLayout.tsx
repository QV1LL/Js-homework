import { Outlet } from 'react-router'
import { ScrollArea } from '@/components'
import { ThemeProvider } from '@/shared'
import { Header, type MenuSection } from '@/widgets/header'
import { Provider } from 'react-redux'
import { store } from '../store/store'

interface BaseLayoutProps {
    sections: MenuSection[]
}

export const BaseLayout = ({ sections }: BaseLayoutProps) => {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <div className="relative flex min-h-screen flex-col bg-background text-foreground">
                    <Header sections={sections} />
                    <ScrollArea className="flex-grow">
                        <main className="container mx-auto max-w-[1200px] px-4 py-8 md:px-8 lg:py-12">
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <Outlet />
                            </div>
                        </main>
                    </ScrollArea>
                </div>
            </ThemeProvider>
        </Provider>
    )
}
