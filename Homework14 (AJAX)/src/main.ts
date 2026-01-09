import { getHomePage } from './components/pages/homePage'

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(getHomePage())

export const navigateToPage = (page: HTMLElement) => app.replaceChildren(page)
