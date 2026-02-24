import { AddContactForm, ContactsList } from '@/features/contacts'

export const Task13 = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <section>
                <h1 className="text-3xl font-bold mb-6">Contact Manager</h1>
                <AddContactForm />
            </section>

            <section>
                <ContactsList />
            </section>
        </div>
    )
}
