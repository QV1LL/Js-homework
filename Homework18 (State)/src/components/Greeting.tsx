import { useState } from 'react'

const Greeting = () => {
    const [name, setName] = useState<string>('')

    return (
        <>
            <input
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm outline-none transition-shadow focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
                type="text"
                value={name}
                onInput={(e) => setName(e.currentTarget.value)}
            />
            <h1>Привіт, {name ? name : 'Незнайомець'}!</h1>
        </>
    )
}

export default Greeting
