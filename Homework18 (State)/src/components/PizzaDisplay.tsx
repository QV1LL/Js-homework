export interface Pizza {
    ingredients: string[]
    cheesePrice: number
    meatPrice: number
}

type PizzaDisplayProps = { pizza: Pizza }

const PizzaDisplay = ({ pizza }: PizzaDisplayProps) => {
    const cheesePrice = pizza.ingredients.filter((i) => i === 'cheese').length * pizza.cheesePrice
    const meatPrice = pizza.ingredients.filter((i) => i === 'meat').length * pizza.meatPrice

    return (
        <div className="max-w-sm bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="bg-orange-50 px-4 py-2 rounded-2xl">
                    <span className="text-xl font-bold text-orange-600">{cheesePrice + meatPrice} ₴</span>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Склад піци:</p>
                <div className="flex flex-wrap gap-2">
                    {pizza.ingredients.map((ingredient, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100"
                        >
                            {ingredient}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PizzaDisplay
