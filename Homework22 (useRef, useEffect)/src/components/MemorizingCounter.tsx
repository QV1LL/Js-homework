import { useEffect, useRef, useState } from 'react'

const MemorizingCounter = () => {
    const [count, setCount] = useState(0)
    const previousCountRef = useRef(0)

    useEffect(() => {
        previousCountRef.current = count
    }, [count])

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="flex gap-2 items-center">
            <button className="border rounded-lg p-2 hover:bg-stone-300" onClick={handleIncrement}>
                +
            </button>
            <p>
                Count: {count}, previous: {previousCountRef.current}
            </p>
            <button className="border rounded-lg p-2 hover:bg-stone-300" onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}

export default MemorizingCounter
