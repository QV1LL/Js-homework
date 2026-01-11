const saveButton = document.getElementById('save-btn')
const exitButton = document.getElementById('exit-btn')

const nameInput = document.getElementById('name-input')
const profileTitle = document.getElementById('profile-title')

const USER_NAME = 'user_name'

saveButton.onclick = () => {
    const nameValue = nameInput.value

    if (nameValue) {
        localStorage.setItem(USER_NAME, nameValue)
        profileTitle.textContent = `Hello, ${nameValue}`
    }
}

exitButton.onclick = () => {
    localStorage.removeItem(USER_NAME)
    nameInput.value = ''
    profileTitle.textContent = 'Profile'
}

const userName = localStorage.getItem(USER_NAME)

if (userName) {
    nameInput.value = userName
    profileTitle.textContent = `Hello, ${userName}`
}
