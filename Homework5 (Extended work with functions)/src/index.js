// Task 1

const currentUser = {
    id: 42,
    name: 'Олена',
    email: 'olena@example.com',
    age: 28,
    city: 'Київ',
    hobbies: ['йога', 'книги'],
    notifications: true,
    theme: 'dark',
}

const updatesFromForm = {
    name: 'Олена Ковальчук',
    age: 29,
    city: 'Львів',
    hobbies: ['йога', 'велосипед', 'фотографія'],
    notifications: false,
}

const newUser = { ...currentUser, ...updatesFromForm }

console.log('Завдання 1:', newUser)

// Task 2

function updateUserProfile(currentUser, updatesFromForm) {
    return {
        ...currentUser,
        ...updatesFromForm,
    }
}

console.log('Завдання 2:', updateUserProfile(currentUser, updatesFromForm))

// Task 3

function removeUserFields(user, ...fieldsToRemove) {
    const result = {}

    for (const key in user) {
        if (!fieldsToRemove.includes(key)) result[key] = user[key]
    }

    return result
}

const cleanedUser = removeUserFields(newUser, 'id', 'theme', 'notifications')
console.log('Завдання 3 (очищений):', cleanedUser)

// Task 4

function addHobbies(user, ...hobbies) {
    return {
        ...user,
        hobbies: [...user.hobbies, ...hobbies],
    }
}

const userWithMoreHobbies = addHobbies(cleanedUser, 'подорожі', 'готування')
console.log('Завдання 4:', userWithMoreHobbies)

// Bonus task

// Without Object.assign
function mergeUserUpdates(base, ...sources) {
    return sources.reduce((acc, obj) => ({ ...acc, ...obj }), { ...base })
}

// With Object.assign
function mergeUserUpdatesWithObjectAssign(base, ...sources) {
    return Object.assign({ ...base }, ...sources)
}

let finalUser = mergeUserUpdates(currentUser, updatesFromForm, { theme: 'light' }, { age: 30 })
console.log('Бонус:', finalUser)

finalUser = mergeUserUpdatesWithObjectAssign(currentUser, updatesFromForm, { theme: 'light' }, { age: 30 })
console.log('Бонус:', finalUser)
