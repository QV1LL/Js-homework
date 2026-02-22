import { createSlice } from '@reduxjs/toolkit'
import { fetchWeather } from './weatherActions'
import type { WeatherState } from './types'

const initialState: WeatherState = {
    temp: null,
    feelsLike: null,
    tempMin: null,
    tempMax: null,
    humidity: null,
    pressure: null,
    windSpeed: null,
    condition: null,
    status: 'idle',
    error: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                const data = action.payload

                if (!data) return

                state.status = 'succeeded'
                state.temp = Math.round(data.main.temp)
                state.feelsLike = Math.round(data.main.feels_like)
                state.tempMin = data.main.temp_min
                state.tempMax = data.main.temp_max
                state.humidity = data.main.humidity
                state.pressure = data.main.pressure
                state.windSpeed = data.wind.speed
                state.condition = data.weather[0] || null
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload as string
            })
    },
})

export const weatherReducer = weatherSlice.reducer
