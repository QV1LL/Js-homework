import { api } from '@/app/api/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { isAxiosError } from 'axios'
import type { WeatherConditionsResponse } from './types'

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({ lat, lon }: { lat: number; lon: number }, { rejectWithValue }) => {
        try {
            const response = await api.get<WeatherConditionsResponse>('/data/2.5/weather', {
                params: {
                    lat,
                    lon,
                    units: 'metric',
                },
            })
            return response.data
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data || 'Failed to fetch sun conditions')
            }
        }
    },
)
