import { createSelector } from '@reduxjs/toolkit'
import { cartAdapter } from './cartSlice'
import type { CartTotal } from './types'
import type { RootState } from '@/app'

export const { selectAll } = cartAdapter.getSelectors((state: RootState) => state.cart)
export const selectCartTotal = createSelector([selectAll], (items): CartTotal => {
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)

    return {
        totalPrice,
        totalQuantity,
    }
})
