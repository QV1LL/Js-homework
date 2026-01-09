import { navigateToPage } from '../../main'
import { getSearchModal } from '../searchModal'
import { getViewMoviesPage } from './viewFilmsPage'

const HOME_PAGE_MARKUP = `
    <div 
        id="home-page-container" 
        class="min-h-screen w-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 to-gray-400"/>
`

export const getHomePage = (): HTMLElement => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = HOME_PAGE_MARKUP

    const container = wrapper.querySelector('#home-page-container')
    container?.appendChild(
        getSearchModal(
            (movies, totalPages, searchParams) => navigateToPage(getViewMoviesPage(movies, totalPages, searchParams)),
            true,
        ),
    )

    return wrapper
}
