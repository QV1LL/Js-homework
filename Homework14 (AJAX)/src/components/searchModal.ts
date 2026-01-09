import { searchMovies, type Movie, type SearchParams } from '../services/filmsService'

const MODAL_MARKUP = `
<div class="bg-white min-w-[400px] max-w-2xl p-6">
    
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold">Пошук медіа</h3>
    </div>

    <form class="flex flex-col gap-4">
        
        <div class="flex flex-col">
            <label for="searchTitle" class="text-sm font-bold mb-1">Назва медіа</label>
            <input 
                type="text" 
                id="searchTitle" 
                name="title" 
                placeholder="Enter title of movie" 
                class="border border-gray-300 p-2 w-full focus:outline-none focus:border-black"
                required 
            />
        </div>

        <div class="flex flex-col">
            <label for="searchType" class="text-sm font-bold mb-1">Тип</label>
            <select 
                id="searchType" 
                name="type" 
                class="border border-gray-300 p-2 w-full bg-white focus:outline-none focus:border-black">
                <option value="movie">Фільм</option>
                <option value="tv">Серіал</option>
            </select>
        </div>

        <div class="flex flex-col">
            <button 
                type="submit" 
                class="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                Шукати
            </button>
        </div>
    </form>
</div>
`

export const getSearchModal = (
    onSearch: (movies: Movie[], totalPages: number, searchParams: SearchParams) => void,
    renderBorders: boolean = false,
): HTMLElement => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = MODAL_MARKUP
    if (renderBorders) wrapper.classList.add('border', 'border-gray-300')

    const searchForm = wrapper.querySelector('form') ?? undefined

    searchForm?.addEventListener('submit', async (e) => {
        e.preventDefault()

        const searchParams = Object.fromEntries(new FormData(searchForm)) as unknown as SearchParams
        const result = await searchMovies(searchParams)
        onSearch(result.films, result.totalPages, searchParams)
    })

    return wrapper
}
