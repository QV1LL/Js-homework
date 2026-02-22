import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components'
import type { MenuSection } from '../model/types'
import { cn } from '@/lib/utils'
import { Link } from 'react-router'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

interface HeaderProps {
    sections: MenuSection[]
}

export const Header = ({ sections }: HeaderProps) => {
    const { setTheme } = useTheme()

    return (
        <header className="flex justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        {sections.map((section) => (
                            <NavigationMenuItem key={section.title}>
                                <NavigationMenuTrigger className="h-9 px-4 py-2">{section.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {section.menuOptions.map((option) => (
                                            <li key={option.id}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to={option.to}
                                                        className={cn(
                                                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                                        )}
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {option.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
