export const ActionTypes = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    SET_INPUT: 'SET_INPUT',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED',
    START_EDIT: 'START_EDIT',
    SET_EDIT_INPUT: 'SET_EDIT_INPUT',
    SAVE_EDIT: 'SAVE_EDIT',
    CANCEL_EDIT: 'CANCEL_EDIT',
} as const

export type TaskAction =
    | { type: typeof ActionTypes.ADD_TASK }
    | { type: typeof ActionTypes.DELETE_TASK; payload: { id: string } }
    | { type: typeof ActionTypes.TOGGLE_TASK; payload: { id: string } }
    | { type: typeof ActionTypes.SET_INPUT; payload: { text: string } }
    | { type: typeof ActionTypes.CLEAR_COMPLETED }
    | { type: typeof ActionTypes.START_EDIT; payload: { id: string; text: string } }
    | { type: typeof ActionTypes.SET_EDIT_INPUT; payload: { input: string } }
    | { type: typeof ActionTypes.SAVE_EDIT }
    | { type: typeof ActionTypes.CANCEL_EDIT }

export const addTask = (): TaskAction => {
    return {
        type: ActionTypes.ADD_TASK,
    }
}

export const deleteTask = (id: string): TaskAction => {
    return {
        type: ActionTypes.DELETE_TASK,
        payload: { id },
    }
}

export const toggleTask = (id: string): TaskAction => {
    return {
        type: ActionTypes.TOGGLE_TASK,
        payload: { id },
    }
}

export const setInput = (value: string): TaskAction => {
    return {
        type: ActionTypes.SET_INPUT,
        payload: { text: value },
    }
}

export const clearCompleted = (): TaskAction => {
    return {
        type: ActionTypes.CLEAR_COMPLETED,
    }
}

export const startEdit = (id: string, text: string): TaskAction => {
    return {
        type: ActionTypes.START_EDIT,
        payload: { id, text },
    }
}

export const setEditInput = (value: string): TaskAction => {
    return {
        type: ActionTypes.SET_EDIT_INPUT,
        payload: { input: value },
    }
}

export const saveEdit = (): TaskAction => {
    return {
        type: ActionTypes.SAVE_EDIT,
    }
}

export const cancelEdit = (): TaskAction => {
    return {
        type: ActionTypes.CANCEL_EDIT,
    }
}
