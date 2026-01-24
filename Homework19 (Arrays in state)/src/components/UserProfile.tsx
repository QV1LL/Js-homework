import { useState } from 'react'

interface User {
    name: string
    email: string
    age: number
}

const UserProfile = () => {
    const [user, setUser] = useState<User>({ name: 'Ivan', email: 'ivan@test.com', age: 25 })

    return (
        <div>
            <input
                type="text"
                placeholder="Username..."
                onInput={(e) => {
                    setUser({ ...user, name: e.currentTarget.value })
                }}
            />
            <div>
                {user.name || 'Unknown'} ({user.age}), email: {user.email}
            </div>
        </div>
    )
}

export default UserProfile
