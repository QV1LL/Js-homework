import { useState } from 'react'

type AccordionItemProps = {
    title: string
    children: React.ReactNode
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 bg-white">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 px-2 text-left transition-colors hover:bg-gray-50 cursor-pointer"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
                    {title}
                </span>
                <svg
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="px-2 text-gray-600 leading-relaxed">{children}</div>
            </div>
        </div>
    )
}

export default AccordionItem
