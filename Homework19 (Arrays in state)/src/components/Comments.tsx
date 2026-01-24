import { useState } from 'react'

interface Comment {
    id: number
    text: string
}

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, text: 'Cool!' },
        { id: 2, text: 'Bad' },
    ])

    const handleDelete = (id: number) => {
        setComments(comments.filter((comment) => comment.id !== id))
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4 px-2">Comments</h2>

            <ul className="flex flex-col gap-3">
                {comments.map((comment) => (
                    <li
                        key={comment.id}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-xs transition-all hover:border-slate-300"
                    >
                        <span className="text-slate-700 font-medium">{comment.text}</span>

                        <button
                            onClick={() => handleDelete(comment.id)}
                            className="px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {comments.length === 0 && <p className="text-center text-slate-400 py-10 italic">No comments left.</p>}
        </div>
    )
}

export default Comments
