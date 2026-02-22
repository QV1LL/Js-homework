import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '@/app/api/api'
import { isAxiosError } from 'axios'
import type { SunConditionsResponse } from './types'

export const fetchSunConditions = createAsyncThunk(
    'sun/fetchSunConditions',
    async ({ lat, lon }: { lat: number; lon: number }, { rejectWithValue }) => {
        try {
            const response = await api.get<SunConditionsResponse>('/data/2.5/weather', {
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
