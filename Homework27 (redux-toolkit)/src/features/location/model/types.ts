export interface LocationState {
    city: string
    state?: string
    countryCode: string
    position?: {
        latitude: number
        longitude: number
    }
    suggestionsCities: CitySuggestion[]
    loading: boolean
}

export interface CitySuggestion {
    name: string
    lat: number
    lon: number
    country: string
    state?: string
}
