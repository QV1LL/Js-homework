import type { RootState } from '@app'
import { setGameMode, setTimeLimit } from '../model/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

interface StartModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
}

export const StartModal = ({ isOpen, onClose, onConfirm }: StartModalProps) => {
    const dispatch = useDispatch()
    const { isTimed, timeLimit } = useSelector((state: RootState) => state.settings)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        dispatch(setTimeLimit(Number(e.target.value)))
    }

    const handleTimed = () => {
        dispatch(setGameMode(true))
    }

    const handleEndless = () => {
        dispatch(setGameMode(false))
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-md bg-slate-800 border-2 border-slate-700 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <header className="text-center mb-8">
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-yellow-400">
                        Game Settings
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">Configure your session</p>
                </header>

                <div className="space-y-6">
                    <section>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                            Mode
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleTimed}
                                className={`py-3 rounded-xl font-bold uppercase transition-all border-2 ${
                                    isTimed
                                        ? 'bg-yellow-400 text-black border-yellow-400'
                                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500'
                                }`}
                            >
                                Timed
                            </button>
                            <button
                                onClick={handleEndless}
                                className={`py-3 rounded-xl font-bold uppercase transition-all border-2 ${
                                    !isTimed
                                        ? 'bg-yellow-400 text-black border-yellow-400'
                                        : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500'
                                }`}
                            >
                                Endless
                            </button>
                        </div>
                    </section>

                    {isTimed && (
                        <section className="animate-in fade-in slide-in-from-top-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                                Time Limit (Seconds)
                            </label>
                            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
                                <input
                                    type="range"
                                    min="60"
                                    max="600"
                                    step="30"
                                    value={timeLimit}
                                    onChange={handleInput}
                                    className="flex-1 accent-yellow-400"
                                />
                                <span className="text-xl font-mono font-bold text-emerald-400 w-12 text-right">
                                    {timeLimit}s
                                </span>
                            </div>
                        </section>
                    )}
                </div>

                <div className="flex flex-col gap-3 mt-10">
                    <button
                        onClick={onConfirm}
                        className="w-full py-4 bg-yellow-400 text-black font-black text-xl uppercase italic rounded-full hover:bg-yellow-300 transition-all active:scale-95 shadow-lg"
                    >
                        Confirm & Start
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full py-2 text-slate-500 font-bold uppercase text-xs hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
