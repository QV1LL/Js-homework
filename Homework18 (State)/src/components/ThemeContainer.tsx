import { useState } from 'react'
import Button from './Button'

const ThemeContainer = () => {
    const [isDark, setIsDark] = useState<boolean>(true)

    return (
        <div
            className={`w-full p-8 transition-colors duration-500 ease-in-out
      ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
    `}
        >
            <div className="max-w-2xl mx-auto space-y-6">
                <Button isDark={isDark} onClick={() => setIsDark(!isDark)}>
                    Змінити тему на {isDark ? 'Світлу' : 'Темну'}
                </Button>

                <p
                    className={`leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam esse, eius quis veritatis
                    eligendi quibusdam doloribus laborum sequi, consequatur necessitatibus! Minima minus expedita atque
                    cum impedit assumenda perspiciatis similique.
                </p>
            </div>
        </div>
    )
}

export default ThemeContainer
