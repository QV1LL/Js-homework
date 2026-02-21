import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { moveSpot, shuffleBoard, type Direction } from '@features/spots'
import type { RootState } from '@app'
import { setGameTime } from '@features/gameStats'

export const GamePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { spots } = useSelector((state: RootState) => state.spots)
    const { isTimed, timeLimit } = useSelector((state: RootState) => state.settings)
    const { gamesTime } = useSelector((state: RootState) => state.stats)
    const minGameTime = Math.min(...gamesTime)

    const [timeLeft, setTimeLeft] = useState(timeLimit)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const isVictory = useMemo(() => {
        const winSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
        return spots.every((val, i) => val === winSequence[i])
    }, [spots])

    useEffect(() => {
        if (isVictory && isActive) {
            handleVictory()
        }
    }, [isVictory])

    useEffect(() => {
        let intervalId: number

        if (isActive && (!isTimed || timeLeft > 0)) {
            intervalId = window.setInterval(() => {
                if (isTimed) setTimeLeft((prev) => prev - 1)
                setElapsedTime((prev) => prev + 1)
            }, 1000)
        } else if (isTimed && timeLeft === 0 && isActive) {
            handleTimeOut()
        }

        return () => {
            if (intervalId) window.clearInterval(intervalId)
        }
    }, [isActive, timeLeft, isTimed])

    const handleVictory = () => {
        setIsActive(false)
        if (elapsedTime >= 0) dispatch(setGameTime(elapsedTime))
        alert(`Victory! Your time: ${elapsedTime}s`)
    }

    const handleTimeOut = () => {
        setIsActive(false)
        alert('Game over, time expired!')
    }

    const handleStartGame = () => {
        dispatch(shuffleBoard())
        setTimeLeft(timeLimit)
        setElapsedTime(0)
        setIsActive(true)
    }

    const handleBackToMenu = () => {
        navigate('/')
    }

    const handleTileClick = (value: number) => {
        if (value === 0 || !isActive) return

        const index = spots.indexOf(value)
        const emptyIndex = spots.indexOf(0)
        const row = Math.floor(index / 4)
        const col = index % 4
        const emptyRow = Math.floor(emptyIndex / 4)
        const emptyCol = emptyIndex % 4

        let direction: Direction | null = null
        if (row === emptyRow + 1 && col === emptyCol) direction = 'up'
        else if (row === emptyRow - 1 && col === emptyCol) direction = 'down'
        else if (row === emptyRow && col === emptyCol + 1) direction = 'left'
        else if (row === emptyRow && col === emptyCol - 1) direction = 'right'

        if (direction) dispatch(moveSpot(value, direction))
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-6 font-sans">
            <header className="w-full max-w-md flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-black italic tracking-tighter uppercase text-yellow-400">In Game</h2>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                        Best: {minGameTime || 0}s
                    </p>
                </div>
                <div className="text-right">
                    {isTimed && (
                        <div
                            className={`text-3xl font-black italic ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}
                        >
                            {timeLeft}s
                        </div>
                    )}
                    <div className="text-xs text-slate-400 font-bold">ELAPSED: {elapsedTime}s</div>
                </div>
            </header>

            <main className="w-full max-w-md">
                <div className="grid grid-cols-4 gap-2 bg-slate-800 p-2 rounded-xl shadow-2xl border-4 border-slate-700 aspect-square">
                    {spots.map((num: number) => (
                        <button
                            key={num}
                            onClick={() => handleTileClick(num)}
                            disabled={num === 0 || !isActive}
                            className={`
                                flex items-center justify-center text-2xl font-black italic rounded-lg transition-all
                                ${
                                    num === 0
                                        ? 'bg-slate-900/50'
                                        : 'bg-yellow-400 text-black shadow-[0_4px_0_rgb(161,98,7)] active:translate-y-1 active:shadow-none hover:bg-yellow-300'
                                }
                                ${!isActive && num !== 0 ? 'opacity-50 grayscale' : ''}
                            `}
                        >
                            {num !== 0 ? num : ''}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                    <button
                        onClick={handleStartGame}
                        className="py-4 bg-white text-black font-black uppercase italic rounded-xl hover:bg-slate-200 transition-all active:scale-95 shadow-lg"
                    >
                        {isActive ? 'Restart' : 'Shuffle'}
                    </button>
                    <button
                        onClick={handleBackToMenu}
                        className="py-4 bg-slate-700 text-white font-black uppercase italic rounded-xl hover:bg-slate-600 transition-all active:scale-95 border-b-4 border-slate-800"
                    >
                        Menu
                    </button>
                    <button
                        onClick={handleVictory}
                        className="py-4 bg-slate-700 text-white font-black uppercase italic rounded-xl hover:bg-slate-600 transition-all active:scale-95 border-b-4 border-slate-800"
                    >
                        Win (only for dev)
                    </button>
                </div>
            </main>

            <footer className="mt-auto pt-10 text-slate-700 text-[10px] uppercase font-bold tracking-[0.2em]">
                Secure Connection • Spot Engine v1.0.4
            </footer>
        </div>
    )
}
