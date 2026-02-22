import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { Contact } from './types'
import type { RootState } from '@/app'

const contactsAdapter = createEntityAdapter<Contact>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialState = contactsAdapter.getInitialState()

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded: contactsAdapter.addOne,
    },
})

export const { selectAll: selectAllContacts, selectById: selectContactById } = contactsAdapter.getSelectors(
    (state: RootState) => state.contacts,
)

export const { contactAdded } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
