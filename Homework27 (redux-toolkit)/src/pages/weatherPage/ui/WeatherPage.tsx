import { useSelector } from 'react-redux'
import type { RootState } from '@/app'
import { SearchSection } from './SearchSection'
import { CurrentWeather } from './CurrentWeather'
import { SunDetails } from './SunDetails'

export const WeatherPage = () => {
    const { localeTime, sunriseTime, sunsetTime } = useSelector((state: RootState) => state.sun)

    const isDay = localeTime && sunriseTime && sunsetTime ? localeTime >= sunriseTime && localeTime < sunsetTime : true

    return (
        <div
            className={`min-h-screen transition-colors duration-700 p-4 md:p-8 ${
                isDay ? 'bg-sky-50 text-slate-900' : 'bg-slate-950 text-slate-50'
            }`}
        >
            <div className="max-w-5xl mx-auto space-y-8">
                <SearchSection isDay={isDay} />
                <CurrentWeather isDay={isDay} />
                <SunDetails isDay={isDay} />
            </div>
        </div>
    )
}
