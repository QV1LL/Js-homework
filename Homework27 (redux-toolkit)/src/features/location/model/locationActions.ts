import { createAsyncThunk } from '@reduxjs/toolkit'
import type { CitySuggestion } from './types'
import { api } from '@/app/api/api'

export const fetchCitiesSuggestions = createAsyncThunk(
    'location/fetchCitiesSuggestions',
    async ({ city, country }: { city: string; country?: string }) => {
        const query = country ? `${city},${country}` : city
        const response = await api.get<CitySuggestion[]>(`/geo/1.0/direct?q=${query}&limit=5`)
        console.log(response.data)
        return response.data
    },
)
