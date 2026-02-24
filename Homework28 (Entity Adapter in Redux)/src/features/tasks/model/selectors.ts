import { createSelector } from '@reduxjs/toolkit'
import { selectAllTasks, selectTaskById } from './tasksSlice'
import type { TaskWithUser } from './types'
import type { RootState } from '@/app'

export const selectTasksWithUsers = createSelector(
    [selectAllTasks, (state: RootState) => state.users.entities],
    (tasks, userEntities): TaskWithUser[] => {
        return tasks.map((task) => {
            return {
                ...userEntities[task.userId],
                ...task,
            }
        })
    },
)

export const selectActiveTask = createSelector(
    [(state: RootState) => state, (state: RootState) => state.tasks.activeTaskId],
    (state, activeId) => {
        if (!activeId) return null
        return selectTaskById(state, activeId)
    },
)

export const selectTasksGroupedByStatus = createSelector([selectAllTasks], (tasks) => {
    return {
        todo: tasks.filter((task) => task.status === 'todo'),
        inProgress: tasks.filter((task) => task.status === 'inProgress'),
        done: tasks.filter((task) => task.status === 'done'),
    }
})
