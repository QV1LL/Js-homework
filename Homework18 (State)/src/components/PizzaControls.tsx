import type { Pizza } from './PizzaDisplay'
import PizzaDisplay from './PizzaDisplay'

type PizzaControlsProps = { pizza: Pizza; onIngredientAdd: (ingredient: string) => void }

const PizzaControls = ({ pizza, onIngredientAdd }: PizzaControlsProps) => {
    return (
        <div className="flex flex-col gap-3">
            <PizzaDisplay pizza={pizza} />
            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={() => onIngredientAdd('cheese')}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-yellow-400 text-yellow-700 font-semibold hover:bg-yellow-50 transition-colors cursor-pointer text-sm"
                >
                    + 🧀 Сир
                </button>
                <button
                    onClick={() => onIngredientAdd('meat')}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-red-400 text-red-700 font-semibold hover:bg-red-50 transition-colors cursor-pointer text-sm"
                >
                    + 🥩 М'ясо
                </button>
            </div>
        </div>
    )
}

export default PizzaControls
