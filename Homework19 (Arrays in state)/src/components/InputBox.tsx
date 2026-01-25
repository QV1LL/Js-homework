type InputBoxProps = {
    value?: string
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void
    name?: string
    type?: string
    placeholder?: string
}

const InputBox = ({ value, onInput, name, type, placeholder }: InputBoxProps) => {
    return (
        <input
            value={value}
            onInput={(e) => {
                if (onInput) onInput(e)
            }}
            type={type || 'text'}
            name={name}
            placeholder={placeholder || 'Some text...'}
            className="w-xl px-4 py-2 bg-white border border-slate-300 rounded-lg outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
        />
    )
}

export default InputBox
