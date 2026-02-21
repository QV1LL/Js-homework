import { useState } from 'react'
import { StartModal } from '@features/gameSettings'
import { GameStatsSection } from '@features/gameStats'
import { useNavigate } from 'react-router'

export const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()

    const handleOpen = () => {
        setIsModalOpen(true)
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleConfirmStart = () => {
        setIsModalOpen(false)
        navigate('/game')
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-black italic tracking-tighter uppercase text-yellow-400">Spot Master</h1>
                <p className="text-slate-400 mt-2 font-medium">Ready to break some records?</p>
            </header>

            <main className="w-full max-w-md space-y-8">
                <GameStatsSection />

                <div className="flex flex-col items-center">
                    <button
                        onClick={handleOpen}
                        className="group relative px-12 py-4 bg-yellow-400 text-black font-black text-2xl uppercase italic rounded-full hover:bg-yellow-300 transition-all active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                    >
                        Start Game
                        <span className="absolute -inset-1 rounded-full border-2 border-yellow-400 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all"></span>
                    </button>
                    <p className="mt-4 text-xs text-slate-500 animate-pulse">Press to Play</p>
                </div>
            </main>

            <footer className="mt-auto pt-10 text-slate-600 text-sm">v1.0.4 • Spots Game Engine</footer>

            <StartModal isOpen={isModalOpen} onClose={handleClose} onConfirm={handleConfirmStart} />
        </div>
    )
}
