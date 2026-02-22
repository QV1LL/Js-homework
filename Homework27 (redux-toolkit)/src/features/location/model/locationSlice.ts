import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { LocationState } from './types'
import { fetchCitiesSuggestions } from './locationActions'

export const LOCATION_STATE_KEY = 'LOCATION_STATE'

const loadState = (): LocationState => {
    const saved = localStorage.getItem(LOCATION_STATE_KEY)
    const parsed = saved ? JSON.parse(saved) : null

    return {
        city: parsed?.city ?? '',
        countryCode: parsed?.countryCode ?? '',
        state: parsed?.state ?? undefined,
        position: parsed?.position ?? { latitude: 0, longitude: 0 },
        suggestionsCities: [],
        loading: false,
    }
}

const initialState = loadState()

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: {
            reducer: (
                state,
                action: PayloadAction<Pick<LocationState, 'city' | 'countryCode' | 'state' | 'position'>>,
            ) => {
                state.city = action.payload.city
                state.countryCode = action.payload.countryCode
                state.state = action.payload.state
                state.position = action.payload.position
            },
            prepare: (location: Pick<LocationState, 'city' | 'countryCode' | 'state' | 'position'>) => {
                return {
                    payload: location,
                }
            },
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCitiesSuggestions.fulfilled, (state, action) => {
                state.suggestionsCities = [...action.payload]
                state.loading = false
            })
            .addCase(fetchCitiesSuggestions.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCitiesSuggestions.rejected, (state) => {
                state.loading = false
            })
    },
})

export const { setLocation } = locationSlice.actions
export const locationReducer = locationSlice.reducer
