const searchButton = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')

const resultContainer = document.getElementById('result-container')
const errorMessage = document.getElementById('error-message')

const avatarImage = document.getElementById('user-avatar')
const userName = document.getElementById('user-name')
const profileLink = document.getElementById('profile-link')

const getGithubUser = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)

        if (!response.ok) return

        if (response.status !== 200) return

        const user = await response.json()

        return {
            name: user.login,
            avatarUrl: user.avatar_url,
            profileLink: user.html_url,
        }
    } catch (error) {
        console.log(error.message)
    }
}

searchInput.oninput = () => errorMessage.classList.add('hidden')

searchButton.onclick = async () => {
    const username = searchInput.value

    if (!username) return

    const user = await getGithubUser(username)

    if (!user) {
        errorMessage.classList.remove('hidden')
        resultContainer.classList.add('hidden')
        return
    }

    errorMessage.classList.add('hidden')
    resultContainer.classList.remove('hidden')

    avatarImage.src = user.avatarUrl
    userName.textContent = user.name
    profileLink.href = user.profileLink
}
