import { searchMovies, type Movie, type SearchParams } from '../../services/filmsService'
import { getMovieCard } from '../movieCard'
import { getSearchModal } from '../searchModal'
import { navigateToPage } from '../../main'
import { getViewFilmPage } from './viewFilmPage'

const getNotFoundLayout = (): HTMLElement => {
    const wrapper = document.createElement('div')
    wrapper.className = 'flex flex-col items-center justify-center py-20 text-center col-span-full w-full'
    wrapper.innerHTML = `
        <div class="bg-gray-100 p-6 rounded-full mb-4">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
            </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900">No movies found</h3>
    `
    return wrapper
}

export const getViewMoviesPage = (
    initialMovies: Movie[],
    initialTotalPages: number,
    initialSearchParams: SearchParams,
): HTMLElement => {
    const wrapper = document.createElement('div')
    wrapper.className = 'flex flex-col items-center w-full gap-8 min-h-screen pb-10'

    let currentPage = 1
    let totalPages = initialTotalPages
    let currentParams = { ...initialSearchParams }
    let isFetching = false
    let savedScrollPosition = 0

    const moviesMap = new Map<string, Movie>()

    const gridContainer = document.createElement('div')
    gridContainer.className = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl p-4'

    const sentinel = document.createElement('div')
    sentinel.className = 'w-full h-4'

    const handleCardClick = (movie: Movie) => {
        savedScrollPosition = window.scrollY

        const onBack = () => {
            navigateToPage(wrapper)
            window.scrollTo(0, savedScrollPosition)
        }

        const detailsPage = getViewFilmPage(movie, onBack)
        navigateToPage(detailsPage)
        window.scrollTo(0, 0)
    }

    gridContainer.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const card = target.closest<HTMLElement>('.group')

        if (card && moviesMap.has(card.id)) {
            const movie = moviesMap.get(card.id)
            if (movie) {
                handleCardClick(movie)
            }
        }
    })

    const renderMovies = (movies: Movie[], clearPrevious: boolean = false) => {
        if (clearPrevious) {
            gridContainer.innerHTML = ''
            moviesMap.clear()
        }

        if (movies.length === 0 && currentPage === 1) {
            gridContainer.className = 'flex w-full justify-center p-4'
            gridContainer.appendChild(getNotFoundLayout())
            return
        }

        if (gridContainer.className.includes('flex')) {
            gridContainer.className = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl p-4'
        }

        movies.forEach((movie) => {
            moviesMap.set(`${movie.id}`, movie)

            const card = getMovieCard(movie)
            card.style.cursor = 'pointer'
            gridContainer.appendChild(card)
        })
    }

    const observer = new IntersectionObserver(
        async (entries) => {
            const entry = entries[0]

            if (entry.isIntersecting && !isFetching && currentPage < totalPages && wrapper.isConnected) {
                isFetching = true

                try {
                    currentPage++
                    const result = await searchMovies({ ...currentParams, page: currentPage })
                    renderMovies(result.films)
                } catch (error) {
                    console.error(error)
                    currentPage--
                } finally {
                    isFetching = false
                }
            }
        },
        { rootMargin: '200px' },
    )

    const handleSearch = (movies: Movie[], newTotalPages: number, newParams: SearchParams) => {
        currentPage = 1
        totalPages = newTotalPages
        currentParams = newParams
        renderMovies(movies, true)
    }

    wrapper.appendChild(getSearchModal(handleSearch))
    renderMovies(initialMovies)
    wrapper.appendChild(gridContainer)
    wrapper.appendChild(sentinel)
    observer.observe(sentinel)

    return wrapper
}
