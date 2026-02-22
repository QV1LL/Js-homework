import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components'
import { fetchCitiesSuggestions, setLocation } from '@/features/location'
import { fetchSunConditions } from '@/features/sun'
import type { AppDispatch, RootState } from '@/app'
import { COUNTRIES } from '@/shared'
import type { CitySuggestion } from '@/features/location/model/types'

export const SearchSection = ({ isDay }: { isDay: boolean }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [countryFilter, setCountryFilter] = useState<string | undefined>()
    const dispatch = useDispatch<AppDispatch>()
    const { suggestionsCities, loading } = useSelector((state: RootState) => state.location)

    useEffect(() => {
        if (searchTerm.length < 2) return
        const delay = setTimeout(() => {
            dispatch(fetchCitiesSuggestions({ city: searchTerm, country: countryFilter }))
        }, 300)
        return () => clearTimeout(delay)
    }, [searchTerm, countryFilter, dispatch])

    const handleSelect = (city: CitySuggestion) => {
        setSearchTerm('')
        dispatch(
            setLocation({
                city: city.name,
                countryCode: city.country,
                state: city.state,
                position: { longitude: city.lon, latitude: city.lat },
            }),
        )
        dispatch(fetchSunConditions({ lat: city.lat, lon: city.lon }))
    }

    return (
        <div
            className={`flex flex-col md:flex-row gap-4 items-end p-6 rounded-2xl backdrop-blur-md border relative z-50 ${
                isDay ? 'bg-white/50 border-sky-100' : 'bg-white/5 border-white/10'
            }`}
        >
            <div className="flex-1 space-y-2 w-full relative">
                <label className="text-sm font-medium px-1 opacity-80">City Name</label>
                <Input
                    placeholder="e.g. London"
                    value={searchTerm}
                    className={`border-none ${isDay ? 'bg-white' : 'bg-white/10 text-white'}`}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {(loading || suggestionsCities.length > 0) && searchTerm.length >= 2 && (
                    <div
                        className={`absolute left-0 right-0 top-[calc(100%+4px)] z-[100] rounded-xl shadow-2xl border overflow-hidden ${
                            isDay ? 'bg-white border-sky-100' : 'bg-slate-900 border-white/10'
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center py-8 gap-3">
                                <Loader2 className="h-5 w-5 animate-spin text-sky-400" />
                            </div>
                        ) : (
                            suggestionsCities.map((city, i) => (
                                <div
                                    key={i}
                                    className={`px-4 py-3 cursor-pointer ${isDay ? 'hover:bg-sky-50' : 'hover:bg-white/5'}`}
                                    onClick={() => handleSelect(city)}
                                >
                                    <p className="font-bold">{city.name}</p>
                                    <p className="text-xs opacity-60">
                                        {COUNTRIES.find((c) => c.id === city.country)?.name ?? city.country},{' '}
                                        {city.state}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
            <div className="w-full md:w-64 space-y-2">
                <Select onValueChange={setCountryFilter}>
                    <SelectTrigger className={`border-none ${isDay ? 'bg-white' : 'bg-white/10 text-white'}`}>
                        <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className={!isDay ? 'bg-slate-900 text-white' : ''}>
                        {COUNTRIES.map((c) => (
                            <SelectItem key={c.id} value={c.id.toLowerCase()}>
                                {c.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
