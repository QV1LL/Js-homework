import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import type { Task } from './types'
import type { RootState } from '@/app'

export const tasksAdapter = createEntityAdapter<Task>({
    sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const initialState = tasksAdapter.getInitialState(
    {
        activeTaskId: '',
    },
    [
        { id: 't1', title: 'Setup project repository', status: 'done', userId: '1' },
        { id: 't2', title: 'Design system architecture', status: 'inProgress', userId: '1' },
        { id: 't3', title: 'Implement authentication', status: 'todo', userId: '2' },
        { id: 't4', title: 'Configure CI/CD pipeline', status: 'todo', userId: '3' },
        { id: 't5', title: 'Write unit tests', status: 'todo', userId: '2' },
    ],
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateTaskUser: (state, action: { payload: { taskId: string; userId: string } }) => {
            const { taskId: id, userId } = action.payload

            tasksAdapter.updateOne(state, {
                id,
                changes: { userId },
            })
        },
        setActiveTask: (state, action: { payload: string | null }) => {
            state.activeTaskId = action.payload ?? ''
        },
        taskUpdated: tasksAdapter.updateOne,
    },
})

export const tasksReducer = tasksSlice.reducer
export const { updateTaskUser, setActiveTask, taskUpdated } = tasksSlice.actions
export const { selectAll: selectAllTasks, selectById: selectTaskById } = tasksAdapter.getSelectors(
    (state: RootState) => state.tasks,
)
