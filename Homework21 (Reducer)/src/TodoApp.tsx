import { useReducer } from 'react'
import { taskReducer } from './taskReducer'
import {
    addTask,
    clearCompleted,
    deleteTask,
    setInput,
    toggleTask,
    startEdit,
    setEditInput,
    saveEdit,
    cancelEdit,
} from './taskActions'

function TodoApp() {
    const [state, dispatch] = useReducer(taskReducer, {
        tasks: [],
        inputValue: '',
        editingId: null,
        editValue: '',
    })

    const handleAddTodo = () => dispatch(addTask())

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setInput(e.target.value))

    const handleDeleteTodo = (id: string) => dispatch(deleteTask(id))

    const handleToggleTodo = (id: string) => dispatch(toggleTask(id))

    const handleClearCompleted = () => dispatch(clearCompleted())

    const handleStartEdit = (id: string, text: string) => dispatch(startEdit(id, text))

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setEditInput(e.target.value))

    const handleSaveEdit = () => dispatch(saveEdit())

    const handleCancelEdit = () => dispatch(cancelEdit())

    const handleKeyDown = (e: React.KeyboardEvent, isEditing: boolean) => {
        if (e.key === 'Enter') {
            if (isEditing) handleSaveEdit()
            else handleAddTodo()
        } else if (e.key === 'Escape' && isEditing) {
            handleCancelEdit()
        }
    }

    return (
        <div>
            <h1>Список завдань</h1>

            <div>
                <input
                    type="text"
                    value={state.inputValue}
                    onChange={handleChangeInput}
                    onKeyDown={(e) => handleKeyDown(e, false)}
                    placeholder="Що потрібно зробити?"
                />
                <button onClick={handleAddTodo}>Додати</button>
                <button onClick={handleClearCompleted}>Очистити виконані</button>
            </div>

            <ul>
                {state.tasks.map((task) => (
                    <li key={task.id}>
                        {state.editingId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={state.editValue}
                                    onChange={handleEditInputChange}
                                    onKeyDown={(e) => handleKeyDown(e, true)}
                                    autoFocus
                                />
                                <button onClick={handleSaveEdit}>Зберегти</button>
                                <button onClick={handleCancelEdit}>Скасувати</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleTodo(task.id)}
                                />
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.text}
                                </span>
                                <button onClick={() => handleStartEdit(task.id, task.text)}>Редагувати</button>
                                <button onClick={() => handleDeleteTodo(task.id)}>Видалити</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp
