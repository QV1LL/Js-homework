type ButtonProps = {
    isDark?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
}

const Button = ({ isDark, onClick, children }: ButtonProps) => (
    <button
        className={`
            px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm active:scale-95 cursor-pointer
            border border-gray-200 
            ${
                isDark
                    ? 'bg-gray-800 text-gray-100 border-gray-700 hover:border-blue-500 hover:text-blue-400'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600'
            }
        `}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
