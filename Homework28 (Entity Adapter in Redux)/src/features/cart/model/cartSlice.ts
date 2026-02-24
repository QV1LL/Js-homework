import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { Cart } from './types'

export const cartAdapter = createEntityAdapter<Cart>({
    sortComparer: (a, b) => a.price - b.price,
})

const initialState = cartAdapter.getInitialState({}, [
    {
        id: 'p1',
        quantity: 2,
        price: 2499,
    },
    {
        id: 'p12',
        quantity: 5,
        price: 180,
    },
])

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export const cartReducer = cartSlice.reducer
