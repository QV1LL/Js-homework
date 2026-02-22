import { createSlice } from '@reduxjs/toolkit'
import type { SunState } from './types'
import { fetchSunConditions } from './sunActions'

const initialState: SunState = {
    sunriseTime: null,
    sunsetTime: null,
    localeTime: null,
    loading: false,
}

const sunSlice = createSlice({
    name: 'sun',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSunConditions.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchSunConditions.fulfilled, (state, action) => {
                if (!action.payload) return

                const { sys, timezone, dt } = action.payload

                const formatTime = (timestamp: number, offset: number) => {
                    const localDate = new Date((timestamp + offset) * 1000)
                    return localDate.toISOString().substring(11, 16)
                }

                state.sunriseTime = formatTime(sys.sunrise, timezone)
                state.sunsetTime = formatTime(sys.sunset, timezone)
                state.localeTime = formatTime(dt, timezone)
                state.loading = false
            })
            .addCase(fetchSunConditions.rejected, (state) => {
                state.loading = false
            })
    },
})

export const sunReducer = sunSlice.reducer
