import { useRef } from 'react'

const SilentCounter = () => {
    const clicksCountRef = useRef<number>(0)

    const handleAddClickCount = () => {
        clicksCountRef.current += 1
        console.log(`Clicks count: ${clicksCountRef.current + 1}`)
    }

    return (
        <>
            <button className="border p-2 rounded-lg" onClick={handleAddClickCount}>
                Clicks: {clicksCountRef.current}
            </button>
        </>
    )
}

export default SilentCounter
