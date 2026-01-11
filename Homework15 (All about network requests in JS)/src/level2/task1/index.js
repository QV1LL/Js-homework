if (!document.cookie.includes('accepted=true')) {
    const cookieBanner = document.querySelector('.cookie-banner')
    cookieBanner.style.opacity = '1'

    const acceptCookieButton = document.querySelector('.cookie-btn')
    acceptCookieButton.onclick = () => {
        document.cookie = 'accepted=true; max-age=5'
        cookieBanner.style.opacity = '0'
    }
}
