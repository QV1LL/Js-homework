import { useState } from 'react'
import InputBox from './InputBox'

interface UserData {
    name: string
    surname: string
    city: string
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState<UserData>({
        name: '',
        surname: '',
        city: '',
    })

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-2">
                <InputBox onInput={handleChange} placeholder="Name..." name="name" type="text" />
                <InputBox onInput={handleChange} placeholder="Surname..." name="surname" type="text" />
                <InputBox placeholder="City..." onInput={handleChange} name="city" type="text" />
            </form>

            <p>
                {Object.values(formData).some((value) => value.trim() !== '')
                    ? `${formData.name} ${formData.surname} (${formData.city})`
                    : 'No user data'}
            </p>
        </div>
    )
}

export default RegistrationForm
