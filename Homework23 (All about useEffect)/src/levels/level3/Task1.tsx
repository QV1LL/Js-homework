import { useState } from 'react'

const ParentComponent = () => {
    const [userId, setUserId] = useState<string>('')

    return (
        <>
            <ProfilePage key={userId} userId={userId} />
        </>
    )
}

function ProfilePage({ userId }: { userId: string }) {
    const [comment, setComment] = useState('')

    return <input value={comment} onChange={(e) => setComment(e.target.value)} />
}

export default ParentComponent
