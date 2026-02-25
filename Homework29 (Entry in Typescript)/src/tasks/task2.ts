interface User {
    name: string // username - поганий неймінг )
    age: number
    isActive: boolean
    email?: string
}

const admin: User = {
    name: 'Olexandr',
    age: 28,
    isActive: false,
}

console.log('Our admin: ', admin.name)
