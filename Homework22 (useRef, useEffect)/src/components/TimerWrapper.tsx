import { useState } from 'react'
import Timer from './Timer'

const TimerWrapper = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="flex gap-3 p-2">
                <button
                    className="bg-slate-200 border rounded-xl p-2 transition hover:bg-slate-300"
                    onClick={() => setShow(!show)}
                >
                    {show ? 'Hide Timer' : 'Show Timer'}
                </button>
            </div>

            {show && <Timer />}
        </>
    )
}

export default TimerWrapper
