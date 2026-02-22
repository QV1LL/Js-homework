export interface SunState {
    sunriseTime: string | null
    sunsetTime: string | null
    localeTime: string | null
    loading: boolean
}

export interface SunConditionsResponse {
    sys: {
        sunrise: number
        sunset: number
    }
    timezone: number
    dt: number
}
