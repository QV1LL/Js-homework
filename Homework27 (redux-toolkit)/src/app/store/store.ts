import { locationMiddleware, locationReducer } from '@/features/location'
import { sunReducer } from '@/features/sun'
import { weatherReducer } from '@/features/weather'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        location: locationReducer,
        sun: sunReducer,
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(locationMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
