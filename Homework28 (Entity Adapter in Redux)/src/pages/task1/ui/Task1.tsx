import { AddContactForm } from './AddContactForm'
import { ContactList } from './ContactsList'

export const Task1 = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <section>
                <h1 className="text-3xl font-bold mb-6">Contact Manager</h1>
                <AddContactForm />
            </section>

            <section>
                <ContactList />
            </section>
        </div>
    )
}
