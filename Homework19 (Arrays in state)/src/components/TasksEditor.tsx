import { useState } from 'react'
import InputBox from './InputBox'

interface Task {
    id: string
    text: string
    draftText: string
    isCompleted: boolean
    isEditing: boolean
}

const TasksEditor = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [text, setText] = useState<string>('')

    const handleTextInput = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const handleAddTask = () => {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                text: text,
                draftText: text,
                isCompleted: false,
                isEditing: false,
            },
        ])
        setText('')
    }

    const handleEditTask = (id: string) => {
        setTasks(
            tasks.map((task) => {
                if (task.id !== id) return task

                return { ...task, isEditing: true }
            }),
        )
    }

    const handleTaskUpdate = (id: string) => {
        setTasks(
            tasks.map((task) => {
                if (task.id !== id) return task

                return { ...task, text: task.draftText || task.text, isEditing: false }
            }),
        )
    }

    const handleToggleComplete = (id: string) => {
        setTasks(
            tasks.map((task) => {
                if (task.id !== id) return task

                return { ...task, isCompleted: !task.isCompleted }
            }),
        )
    }

    const handleInputChange = (id: string, text: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, draftText: text } : task)))
    }

    return (
        <>
            <div>
                <InputBox value={text} placeholder="Add new task..." onInput={handleTextInput} />
                <button
                    className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} className="flex items-center justify-between gap-4 p-2 border-b">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={task.isCompleted}
                                    onChange={() => handleToggleComplete(task.id)}
                                    className="cursor-pointer"
                                />
                                {task.isEditing ? (
                                    <input
                                        className="border px-1 outline-none"
                                        value={task.draftText}
                                        onChange={(e) => handleInputChange(task.id, e.target.value)}
                                    />
                                ) : (
                                    <p className={task.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}>
                                        {task.text}
                                    </p>
                                )}
                            </div>
                            <div>
                                {task.isEditing ? (
                                    <button
                                        className="text-green-600 font-bold"
                                        onClick={() => handleTaskUpdate(task.id)}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        className={`${task.isCompleted ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600'}`}
                                        onClick={() => handleEditTask(task.id)}
                                        disabled={task.isCompleted}
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TasksEditor
