import { useEffect } from 'react'

const ColorBox = ({ color }: { color: string }) => {
    useEffect(() => {
        console.log(`Color changed to: ${color}`)
    }, [color])

    return <p className={`bg-${color}-300`}>Current color: {color}</p>
}

export default ColorBox
