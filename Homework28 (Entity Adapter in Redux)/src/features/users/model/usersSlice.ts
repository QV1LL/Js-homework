import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { User } from './types'
import type { RootState } from '@/app'

export const usersAdapter = createEntityAdapter<User>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialUsers = [
    { id: '1', name: 'Alice Freeman', avatarUrl: '/avatars/alice.png' },
    { id: '2', name: 'Bob Vance', avatarUrl: '/avatars/bob.png' },
    { id: '3', name: 'Charlie Day', avatarUrl: '/avatars/charlie.png' },
]

const initialState = usersAdapter.getInitialState(
    {
        loadingStatus: 'idle',
        error: null as string | null,
    },
    initialUsers,
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export const usersReducer = usersSlice.reducer
export const { selectAll: selectAllUsers } = usersAdapter.getSelectors((state: RootState) => state.users)
