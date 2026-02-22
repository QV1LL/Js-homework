export interface WeatherCondition {
    id: number
    main: string
    description: string
    icon: string
}

export interface WeatherState {
    temp: number | null
    feelsLike: number | null
    tempMin: number | null
    tempMax: number | null
    humidity: number | null
    pressure: number | null
    windSpeed: number | null
    condition: WeatherCondition | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

export interface WeatherConditionsResponse {
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    wind: {
        speed: number
    }
    weather: Array<{
        id: number
        main: string
        description: string
        icon: string
    }>
}
