import { useState } from 'react'

const Task2 = () => {
    const [items] = useState(['Apple', 'Banana', 'Orange'])
    const [query, setQuery] = useState('')
    const filtered = items.filter((item) => item.includes(query))

    return <></>
}

export default Task2
