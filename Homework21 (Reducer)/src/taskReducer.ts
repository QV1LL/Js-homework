import { ActionTypes, type TaskAction } from './taskActions'
import type { Task } from './types'

export interface TodoAppState {
    tasks: Task[]
    inputValue: string
    editingId: string | null
    editValue: string
}

export const taskReducer = (state: TodoAppState, action: TaskAction): TodoAppState => {
    switch (action.type) {
        case ActionTypes.ADD_TASK: {
            if (!state.inputValue.trim()) return state
            return {
                ...state,
                tasks: [...state.tasks, { id: crypto.randomUUID(), text: state.inputValue, completed: false }],
                inputValue: '',
            }
        }
        case ActionTypes.DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
                editingId: state.editingId === action.payload.id ? null : state.editingId,
            }
        }
        case ActionTypes.TOGGLE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id !== action.payload.id ? task : { ...task, completed: !task.completed },
                ),
            }
        }
        case ActionTypes.SET_INPUT: {
            return {
                ...state,
                inputValue: action.payload.text,
            }
        }
        case ActionTypes.CLEAR_COMPLETED: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => !task.completed),
            }
        }
        case ActionTypes.START_EDIT: {
            return {
                ...state,
                editingId: action.payload.id,
                editValue: action.payload.text,
            }
        }
        case ActionTypes.SET_EDIT_INPUT: {
            return {
                ...state,
                editValue: action.payload.input,
            }
        }
        case ActionTypes.SAVE_EDIT: {
            if (!state.editValue.trim()) return state
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === state.editingId ? { ...task, text: state.editValue } : task,
                ),
                editingId: null,
                editValue: '',
            }
        }
        case ActionTypes.CANCEL_EDIT: {
            return {
                ...state,
                editingId: null,
                editValue: '',
            }
        }
        default: {
            return state
        }
    }
}
