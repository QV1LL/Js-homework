import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sunrise, Sunset } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fetchSunConditions } from '@/features/sun'
import type { RootState, AppDispatch } from '@/app'

export const SunDetails = ({ isDay }: { isDay: boolean }) => {
    const dispatch = useDispatch<AppDispatch>()

    const { position } = useSelector((state: RootState) => state.location)
    const { sunriseTime, sunsetTime, loading } = useSelector((state: RootState) => state.sun)

    useEffect(() => {
        if (position?.latitude && position?.longitude) {
            dispatch(
                fetchSunConditions({
                    lat: position.latitude,
                    lon: position.longitude,
                }),
            )
        }
    }, [position, dispatch])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-0">
            <Card
                className={`border-none transition-all ${
                    isDay ? 'bg-orange-400/10' : 'bg-orange-500/5 ring-1 ring-orange-500/20'
                }`}
            >
                <CardContent className="p-8 flex items-center gap-6">
                    <div className="p-4 bg-orange-500/20 rounded-2xl">
                        <Sunrise className="h-8 w-8 text-orange-400" />
                    </div>
                    <div>
                        <p className="text-sm font-bold opacity-40 uppercase tracking-tighter">Sunrise</p>
                        <p className={`text-2xl font-black ${isDay ? 'text-slate-900' : 'text-white'}`}>
                            {loading ? '...' : sunriseTime || '--:--'}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card
                className={`border-none transition-all ${
                    isDay ? 'bg-purple-400/10' : 'bg-purple-500/5 ring-1 ring-purple-500/20'
                }`}
            >
                <CardContent className="p-8 flex items-center gap-6">
                    <div className="p-4 bg-purple-500/20 rounded-2xl">
                        <Sunset className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                        <p className="text-sm font-bold opacity-40 uppercase tracking-tighter">Sunset</p>
                        <p className={`text-2xl font-black ${isDay ? 'text-slate-900' : 'text-white'}`}>
                            {loading ? '...' : sunsetTime || '--:--'}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
