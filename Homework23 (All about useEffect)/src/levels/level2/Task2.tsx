import { useState } from 'react'

const Task2 = () => {
    const [cart, setCart] = useState([])

    // Alert moved to buyItem function, removed redunant useEffect

    function buyItem(item) {
        setCart([...cart, item])
        alert('Товар додано!')
    }

    return <></>
}

export default Task2
