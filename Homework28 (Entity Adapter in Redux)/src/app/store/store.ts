import { cartReducer } from '@/features/cart'
import { contactsReducer } from '@/features/contacts'
import { productsReducer } from '@/features/products'
import { tasksReducer } from '@/features/tasks'
import { usersReducer } from '@/features/users'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        products: productsReducer,
        cart: cartReducer,
        users: usersReducer,
        tasks: tasksReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
