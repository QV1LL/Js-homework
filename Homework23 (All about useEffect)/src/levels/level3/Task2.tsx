import { useState } from 'react'

const Task2 = () => {
    const [cardType, setCardType] = useState('gold')
    const discount = cardType === 'gold' ? 20 : 0
    const finalPrice = 100 - discount

    return <></>
}
