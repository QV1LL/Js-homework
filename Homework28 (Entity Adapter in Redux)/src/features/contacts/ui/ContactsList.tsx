import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardHeader, CardTitle, Checkbox } from '@/components'
import { useEffect, useRef, useState } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { Phone, Trash2 } from 'lucide-react'
import { contactsRemoved, selectAllContacts } from '../model/contactsSlice'
import { EditContactModal } from './EditContactModal'

export const ContactsList = () => {
    const contacts = useSelector(selectAllContacts)
    const dispatch = useDispatch()

    const [contactsIdsToDelete, setContactsIdsToDelete] = useState<string[]>([])
    const parent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (parent.current) autoAnimate(parent.current)
    }, [parent])

    const handleToogleContact = (id: string) => {
        const isEnabled = contactsIdsToDelete.includes(id)

        if (isEnabled) {
            setContactsIdsToDelete(contactsIdsToDelete.filter((i) => i !== id))
            return
        }

        setContactsIdsToDelete([...contactsIdsToDelete, id])
    }

    const handleRemoveContacts = () => {
        dispatch(contactsRemoved(contactsIdsToDelete))
    }

    return (
        <div className="mt-8 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
                Contacts ({contacts.length})
            </h3>

            <div ref={parent} className="grid gap-3">
                {contacts.map((contact) => (
                    <Card
                        key={contact.id}
                        className={`transition-all hover:border-primary/50 ${
                            contactsIdsToDelete.includes(contact.id) ? 'border-primary bg-primary/5' : ''
                        }`}
                    >
                        <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-4">
                            <Checkbox
                                checked={contactsIdsToDelete.includes(contact.id)}
                                onCheckedChange={() => handleToogleContact(contact.id)}
                            />
                            <div
                                className="space-y-1 flex-grow cursor-pointer"
                                onClick={() => handleToogleContact(contact.id)}
                            >
                                <CardTitle className="text-base font-bold">{contact.name}</CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                                    {contact.phone || 'No number'}
                                </div>
                            </div>

                            <EditContactModal contact={contact} />
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {contacts.length === 0 ? (
                <div className="text-center py-20 border-2 border-dashed rounded-xl">
                    <p className="text-muted-foreground">No contacts yet. Add your first one above!</p>
                </div>
            ) : (
                contactsIdsToDelete.length > 0 && (
                    <div className="pt-4 border-t mt-2 animate-in slide-in-from-bottom-2 duration-300">
                        <Button
                            variant="destructive"
                            className="w-full shadow-lg hover:shadow-destructive/20"
                            onClick={handleRemoveContacts}
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete selected contacts ({contactsIdsToDelete.length})
                        </Button>
                        <p className="text-center text-xs text-muted-foreground mt-2 italic">
                            This action cannot be undone
                        </p>
                    </div>
                )
            )}
        </div>
    )
}
