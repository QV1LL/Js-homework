import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Pencil } from 'lucide-react'
import {
    Button,
    Input,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from '@/components'
import type { Contact } from '../model/types'
import { contactUpdated } from '../model/contactsSlice'

interface EditContactDialogProps {
    contact: Contact
}

const PHONE_REGEX = /^(?:\+?38)?0\d{9}$/

export const EditContactModal = ({ contact }: EditContactDialogProps) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({ name: contact.name, phone: contact.phone })
    const [error, setError] = useState<string | null>(null)

    const handleChange = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }))
        if (error) setError(null)
    }

    const validate = () => {
        if (values.name.trim().length < 2) return 'Name must be at least 2 characters'
        if (!PHONE_REGEX.test(values.phone.trim())) return 'Enter a valid UA number (e.g., 0671234567)'
        return null
    }

    const handleSave = () => {
        const validationError = validate()
        if (validationError) {
            setError(validationError)
            return
        }

        dispatch(
            contactUpdated({
                id: contact.id,
                changes: {
                    name: values.name.trim(),
                    phone: values.phone.trim(),
                },
            }),
        )
        setOpen(false)
    }

    const onOpenChange = (isOpen: boolean) => {
        setOpen(isOpen)
        if (isOpen) {
            setValues({ name: contact.name, phone: contact.phone })
        }
        setError(null)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Edit Contact</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input
                            value={values.name}
                            onChange={handleChange('name')}
                            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                            className={error && values.name.trim().length < 2 ? 'border-destructive' : ''}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                            type="tel"
                            value={values.phone}
                            onChange={handleChange('phone')}
                            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                            className={error && !PHONE_REGEX.test(values.phone.trim()) ? 'border-destructive' : ''}
                        />
                    </div>

                    {error && (
                        <p className="text-[0.8rem] font-medium text-destructive animate-in fade-in slide-in-from-top-1">
                            {error}
                        </p>
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
