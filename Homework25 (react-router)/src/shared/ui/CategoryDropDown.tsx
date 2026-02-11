import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface CategoryDropDownProps {
    categories: string[]
    label?: string
}

export const CategoryDropDown = ({ categories, label = 'Categories' }: CategoryDropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [openUpwards, setOpenUpwards] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect()
            const spaceBelow = window.innerHeight - rect.bottom
            const dropdownHeight = 240

            setOpenUpwards(spaceBelow < dropdownHeight)
        }
    }, [isOpen])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-indigo-600 ${
                    isOpen ? 'text-indigo-600' : 'text-gray-600'
                }`}
            >
                {label}
                <svg
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`absolute right-0 z-[100] w-56 origin-top-right rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in zoom-in duration-200 ${
                        openUpwards ? 'bottom-full mb-3 origin-bottom' : 'top-full mt-3 origin-top'
                    }`}
                >
                    {categories.map((category) => (
                        <Link
                            key={category}
                            to={`/category/${category}`}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 capitalize transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
