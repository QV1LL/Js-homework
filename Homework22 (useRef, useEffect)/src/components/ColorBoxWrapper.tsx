import { useState } from 'react'
import ColorBox from './ColorBox'

const ColorBoxWrapper = () => {
    const [color, setColor] = useState<string>('red')

    return (
        <>
            <div>
                <div className="flex gap-3 p-2">
                    <button
                        className="bg-red-300 border rounded-xl p-1 transition hover:bg-stone-400"
                        onClick={() => setColor('red')}
                    >
                        Red
                    </button>
                    <button
                        className="bg-blue-300 border rounded-xl p-1 transition hover:bg-stone-400"
                        onClick={() => setColor('blue')}
                    >
                        Blue
                    </button>
                </div>
            </div>
            <ColorBox color={color} />
        </>
    )
}

export default ColorBoxWrapper
