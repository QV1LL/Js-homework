import { useState } from 'react'

const AddTag = () => {
    const [tags, setTags] = useState<string[]>(['React', 'JS'])

    return (
        <div className="flex flex-col">
            <button
                className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all hover:shadow-lg active:scale-95 cursor-pointer"
                onClick={() => {
                    const css = 'CSS'

                    if (tags.includes(css)) return

                    setTags([...tags, css])
                }}
            >
                Add CSS
            </button>
            <p>Styles: {tags.join(', ')}</p>
        </div>
    )
}

export default AddTag
