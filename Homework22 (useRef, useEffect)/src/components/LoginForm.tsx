import { useEffect, useRef } from 'react'
import InputBox from './InputBox'

const LoginForm = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <form className="flex flex-col gap-2">
            <InputBox ref={inputRef} name="login" type="text" placeholder="login" />
            <InputBox name="password" type="password" placeholder="password" />
        </form>
    )
}

export default LoginForm
