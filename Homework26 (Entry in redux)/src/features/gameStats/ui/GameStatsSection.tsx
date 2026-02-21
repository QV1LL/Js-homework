import type { RootState } from '@app'
import { useSelector } from 'react-redux'

export const GameStatsSection = () => {
    const { gamesTime } = useSelector((state: RootState) => state.stats)
    const maxGameTime = gamesTime.length && Math.max(...gamesTime)
    const minGameTime = gamesTime.length && Math.min(...gamesTime)
    const averageGameTime =
        gamesTime.length && Math.ceil((gamesTime.reduce((acc, time) => acc + time) / gamesTime.length) * 1000) / 1000

    return (
        <section className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
                Player Statistics
            </h2>

            <div className="grid grid-cols-1 gap-6">
                <div className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-slate-400">Longest Game</span>
                    <span className="text-xl font-mono font-bold text-emerald-400">{maxGameTime}</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-slate-400">Shortest Game</span>
                    <span className="text-xl font-mono font-bold text-sky-400">{minGameTime}</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-slate-400">Average Time</span>
                    <span className="text-xl font-mono font-bold text-yellow-400">{averageGameTime}</span>
                </div>
            </div>
        </section>
    )
}
