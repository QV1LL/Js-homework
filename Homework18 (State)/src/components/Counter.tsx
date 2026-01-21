// Counter.jsx
import { useState } from 'react'
import Button from './Button'

export default function Counter() {
    const [count, setCount] = useState<number>(0)

    function handleClick() {
        setCount(count + 1)
        console.log(count)
    }

    return <Button onClick={handleClick}>Кліків: {count}</Button>
}
