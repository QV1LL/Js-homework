import { useState } from 'react'

const Counter = () => {
    const [clicksCount, setClicksCount] = useState<number>(0)

    const handleAddClickCount = () => {
        setClicksCount(clicksCount + 1)
        document.title = `Clicks count: ${clicksCount + 1}`
    }

    return (
        <>
            <button className="border p-2 rounded-lg" onClick={handleAddClickCount}>
                Clicks: {clicksCount}
            </button>
        </>
    )
}

export default Counter
