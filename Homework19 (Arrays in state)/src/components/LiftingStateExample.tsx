import { useState } from 'react'
import InputBox from './InputBox'

const DisplayBox = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
}

const LiftingStateExample = () => {
    const [value, setValue] = useState<string>()

    return (
        <div className="flex flex-col gap-3">
            <InputBox onInput={(e) => setValue(e.currentTarget.value)} />
            <DisplayBox>{value}</DisplayBox>
        </div>
    )
}

export default LiftingStateExample
