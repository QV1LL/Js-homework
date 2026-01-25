import { useState } from 'react'

interface Product {
    id: string
    title: string
    price: number
}

interface CartItem extends Product {
    quantity: number
}

const initialProducts: Product[] = [
    { id: '1', title: 'Wireless Headphones', price: 99 },
    { id: '2', title: 'Mechanical Keyboard', price: 149 },
    { id: '3', title: 'Gaming Mouse', price: 59 },
    { id: '4', title: '4K Monitor', price: 329 },
    { id: '5', title: 'USB-C Dock', price: 89 },
    { id: '6', title: 'Smart Watch', price: 199 },
    { id: '7', title: 'Portable SSD', price: 129 },
    { id: '8', title: 'Webcam 1080p', price: 79 },
    { id: '9', title: 'Studio Microphone', price: 159 },
    { id: '10', title: 'Ergonomic Chair', price: 299 },
]

type ShopProps = {
    products: Product[]
    onBuy: (productId: string) => void
}

const Shop = ({ products, onBuy }: ShopProps) => {
    return (
        <ul className="divide-y divide-gray-200">
            {products.map((product) => {
                return (
                    <li key={product.id} className="flex items-center justify-between py-4 px-2">
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-gray-900">{product.title}</span>
                            <span className="text-sm text-gray-500">${product.price.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => onBuy(product.id)}
                            className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Buy
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

type CartProps = {
    cartItems: CartItem[]
    onRemoveItem: (itemId: string) => void
}

const Cart = ({ cartItems, onRemoveItem }: CartProps) => {
    const totalPrice = cartItems.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)

    const removeItem = (id: string) => {
        onRemoveItem(id)
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 border-b pb-4">Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-10">Cart is empty</p>
            ) : (
                <>
                    <ul className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-900">{item.title}</span>
                                    <span className="text-sm text-gray-500">
                                        ${item.price} x {item.quantity}
                                    </span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="font-bold text-gray-900">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 text-sm font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg text-gray-600">Total Amount:</span>
                            <span className="text-2xl font-black text-blue-600">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-[0.98]">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

const OnlineShop = () => {
    const products = [...initialProducts]
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const handleBuyItem = (id: string) => {
        if (cartItems.some((item) => item.id === id)) {
            setCartItems(
                cartItems.map((item) => {
                    if (item.id !== id) return item

                    return { ...item, quantity: item.quantity + 1 }
                }),
            )
            return
        }

        const productToAdd = products.find((product) => product.id === id)

        if (productToAdd) {
            setCartItems([...cartItems, { ...productToAdd, quantity: 1 }])
        }
    }

    const handleRemoveItem = (id: string) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    return (
        <>
            <Shop products={products} onBuy={handleBuyItem} />
            <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        </>
    )
}

export default OnlineShop
