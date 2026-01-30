import { useState, useRef, useEffect } from 'react'
import InputBox from './InputBox'

const ChatList = () => {
    const [messages, setMessages] = useState<string[]>(['Привіт! Як справи?', 'Це перше повідомлення.'])
    const [messageText, setMessageText] = useState<string>('')
    const anchorRef = useRef<HTMLDivElement>(null)

    const addMessage = () => {
        if (messageText === '') return

        setMessages((prev) => [...prev, messageText])
        setMessageText('')
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                addMessage()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [messageText])

    useEffect(() => {
        if (anchorRef.current) {
            anchorRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="h-64 overflow-y-scroll border border-slate-200 rounded-lg p-3 mb-4 bg-white flex flex-col gap-2">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-slate-100 p-2 rounded-md text-sm text-slate-700">
                        {msg}
                    </div>
                ))}
                <div ref={anchorRef} />
            </div>

            <div className="flex gap-2">
                <InputBox
                    value={messageText}
                    onInput={(e) => setMessageText(e.currentTarget.value)}
                    placeholder="Type new message"
                />
                <button
                    onClick={addMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default ChatList
