import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from '@/components'
import { nanoid } from '@reduxjs/toolkit'
import { contactAdded } from '../model/contactsSlice'

const PHONE_REGEX = /^(?:\+?38)?0\d{9}$/

export const AddContactForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState<string | null>(null)

    const handleAdd = () => {
        if (!name.trim()) {
            setError('Name is required')
            return
        }

        if (!PHONE_REGEX.test(phone.trim())) {
            setError('Invalid phone format')
            return
        }

        dispatch(
            contactAdded({
                id: nanoid(),
                name: name.trim(),
                phone: phone.trim(),
            }),
        )

        setName('')
        setPhone('')
        setError(null)
    }

    const handleInputChange =
        (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value)
            if (error) setError(null)
        }

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-lg bg-card">
            <h3 className="text-lg font-medium">Add New Contact</h3>

            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Input
                        placeholder="Contact name..."
                        value={name}
                        onChange={handleInputChange(setName)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                        className={error && !name.trim() ? 'border-destructive' : ''}
                    />
                    <Input
                        type="tel"
                        placeholder="+380..."
                        value={phone}
                        onChange={handleInputChange(setPhone)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                        className={error && !PHONE_REGEX.test(phone) ? 'border-destructive' : ''}
                    />
                    <Button onClick={handleAdd}>Add</Button>
                </div>

                {error && (
                    <p className="text-sm font-medium text-destructive animate-in fade-in slide-in-from-top-1">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}
