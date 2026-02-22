import { useSelector } from 'react-redux'
import { selectAllContacts } from '../model/contactsSlice'
import { Card, CardHeader, CardTitle } from '@/components'
import { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { Phone } from 'lucide-react'

export const ContactList = () => {
    const contacts = useSelector(selectAllContacts)
    const parent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (parent.current) autoAnimate(parent.current)
    }, [parent])

    return (
        <div className="mt-8 space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1">
                Contacts ({contacts.length})
            </h3>

            <div ref={parent} className="grid gap-3">
                {contacts.map((contact) => (
                    <Card key={contact.id} className="transition-all hover:border-primary/50">
                        <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
                            <div className="space-y-1">
                                <CardTitle className="text-base font-bold">{contact.name}</CardTitle>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                                    {contact.phone || 'No number'}
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {contacts.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed rounded-xl">
                    <p className="text-muted-foreground">No contacts yet. Add your first one above!</p>
                </div>
            )}
        </div>
    )
}
