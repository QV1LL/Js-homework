import type { Middleware } from '@reduxjs/toolkit'
import { LOCATION_STATE_KEY } from './locationSlice'

export const locationMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action)

    if (typeof action === 'object' && action !== null && 'type' in action) {
        const actionType = (action as { type: string }).type

        if (actionType.startsWith('location/')) {
            const { city, state, countryCode, position } = store.getState().location
            localStorage.setItem(LOCATION_STATE_KEY, JSON.stringify({ city, state, countryCode, position }))
        }
    }

    return result
}
