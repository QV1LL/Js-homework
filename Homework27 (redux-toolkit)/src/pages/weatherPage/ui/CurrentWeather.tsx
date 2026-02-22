import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MapPin, Sun, Moon, Wind, Droplets, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchWeather } from '@/features/weather'
import type { RootState, AppDispatch } from '@/app'
import { COUNTRIES } from '@/shared'

export const CurrentWeather = ({ isDay }: { isDay: boolean }) => {
    const dispatch = useDispatch<AppDispatch>()

    const { city, countryCode, state, position } = useSelector((state: RootState) => state.location)
    const { temp, windSpeed, humidity, condition, status } = useSelector((state: RootState) => state.weather)

    useEffect(() => {
        if (position?.latitude && position?.longitude) {
            dispatch(fetchWeather({ lat: position.latitude, lon: position.longitude }))
        }
    }, [position, dispatch])

    const isLoading = status === 'loading'

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-sky-400" />
                    <div>
                        <h1 className="text-4xl font-black">{city || 'Select City'}</h1>
                        <p className="text-sm opacity-60">
                            {COUNTRIES.find((c) => c.id === countryCode)?.name ?? countryCode} {state && `, ${state}`}
                        </p>
                    </div>
                </div>
                <div
                    className={`p-4 rounded-3xl transition-all duration-500 ${
                        isDay ? 'bg-orange-100' : 'bg-indigo-500/20 ring-1 ring-indigo-500/50'
                    }`}
                >
                    {isDay ? (
                        <Sun className="h-10 w-10 text-orange-500 fill-orange-500" />
                    ) : (
                        <Moon className="h-10 w-10 text-indigo-300 fill-indigo-300" />
                    )}
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                    className={`col-span-1 md:col-span-2 border-none shadow-2xl relative overflow-hidden ${
                        isDay ? 'bg-white/60' : 'bg-white/5 backdrop-blur-xl text-white'
                    }`}
                >
                    {isLoading && (
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 flex items-center justify-center">
                            <Loader2 className="animate-spin h-8 w-8 text-sky-500" />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="text-lg opacity-50 uppercase tracking-widest font-bold">
                            Temperature
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2">
                            <span className="text-9xl font-black tracking-tighter">{temp !== null ? temp : '--'}</span>
                            <span className="text-4xl font-light opacity-50">°C</span>
                        </div>
                        <p className="text-2xl mt-4 font-semibold text-sky-400 capitalize">
                            {condition?.description || 'Weather unknown'}
                        </p>
                    </CardContent>
                </Card>

                <div className="flex flex-col gap-6">
                    <Card className={`border-none shadow-xl flex-1 ${isDay ? 'bg-white/60' : 'bg-white/5 text-white'}`}>
                        <CardContent className="pt-8 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-sky-500/20 rounded-xl">
                                    <Wind className="h-6 w-6 text-sky-400" />
                                </div>
                                <p className="font-medium opacity-80">Wind Speed</p>
                            </div>
                            <p className="text-xl font-bold">{windSpeed !== null ? `${windSpeed} km/h` : '--'}</p>
                        </CardContent>
                    </Card>

                    <Card className={`border-none shadow-xl flex-1 ${isDay ? 'bg-white/60' : 'bg-white/5 text-white'}`}>
                        <CardContent className="pt-8 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Droplets className="h-6 w-6 text-blue-400" />
                                </div>
                                <p className="font-medium opacity-80">Humidity</p>
                            </div>
                            <p className="text-xl font-bold">{humidity !== null ? `${humidity}%` : '--'}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
