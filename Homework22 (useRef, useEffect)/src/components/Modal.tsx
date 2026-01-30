import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ onClose }: { onClose: () => void }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose()
            }
        }

        document.body.style.overflow = 'hidden'
        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.body.style.overflow = 'unset'
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [])

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div ref={modalRef} className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full mx-4">
                <h2 className="text-xl font-bold mb-2">Hello</h2>
                <p className="text-slate-600">This is modal window, please click out of bounds to close it</p>
            </div>
        </div>,
        document.body,
    )
}

export default Modal
