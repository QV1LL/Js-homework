import { useState } from 'react'
import Modal from './Modal'

const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleModalClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="p-10 text-center">
            {!isOpen && (
                <button
                    className="bg-indigo-500 text-white rounded-xl px-6 py-3 hover:bg-indigo-600 transition cursor-pointer font-medium"
                    onClick={() => setIsOpen(true)}
                >
                    Open Modal
                </button>
            )}

            {isOpen && <Modal onClose={handleModalClose} />}
        </div>
    )
}

export default ModalWrapper
