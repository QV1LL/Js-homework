import { useState } from 'react'
import Button from './Button'

type OrderItem = { title: string; id: string }

const OrderItems = () => {
    const [title, setTitle] = useState<string>('')
    const [items, setItems] = useState<OrderItem[]>([])

    const handleAddItem = () => {
        if (title === '') return

        setItems([...items, { title: title, id: crypto.randomUUID() }])
        setTitle('')
    }

    const handleDeleteItem = (id: string) => {
        setItems(items.filter((item) => item.id !== id))
    }

    return (
        <div className="w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl border border-gray-100 shadow-sm focus-within:bg-white transition-colors">
                <div className="relative flex-1">
                    <input
                        className="w-full px-3 py-2.5 bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
                        type="text"
                        placeholder="Введіть назву товару..."
                        value={title}
                        onInput={(e) => setTitle(e.currentTarget.value)}
                    />
                </div>

                <Button onClick={handleAddItem}>Додати</Button>
            </div>
            <ul className="flex flex-col">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="group flex items-center justify-between p-3 mb-2 bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-blue-100"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <p className="text-gray-700 font-medium">{item.title}</p>
                        </div>

                        <button
                            className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
                            onClick={() => handleDeleteItem(item.id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrderItems
