const progressBar = document.getElementById('scroll-progress-bar')
const body = document.body

window.addEventListener('scroll', (e) => {
    const scrollPercent = (window.scrollY / (body.scrollHeight - window.innerHeight)) * 100
    progressBar.style.width = `${scrollPercent}%`

    const hue = 120 + scrollPercent * 1.2
    const lightness = 70 - scrollPercent * 0.4
    progressBar.style.backgroundColor = `hsl(${hue}, 80%, ${lightness}%)`
})
