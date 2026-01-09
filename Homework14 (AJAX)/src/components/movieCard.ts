import { type Movie } from '../services/filmsService'

const IMAGE_PLACEHOLDER_URL = 'https://placehold.co/500x750?text=No+Image'

export const getMovieCard = ({ id, title, poster, year }: Movie): HTMLElement => {
    const movieCard = document.createElement('div')
    movieCard.id = `${id}`
    movieCard.className =
        'group relative flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full'

    const imageSrc = poster ?? IMAGE_PLACEHOLDER_URL

    movieCard.innerHTML = `
        <div class="relative w-full aspect-[2/3] overflow-hidden bg-gray-100">
            <img 
                src="${imageSrc}" 
                alt="${title}" 
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>

        <div class="flex flex-col p-4 flex-grow">
            <h3 class="font-bold text-gray-900 text-base leading-tight mb-1 line-clamp-2" title="${title}">
                ${title}
            </h3>
            <span class="text-sm text-gray-500 mt-auto">
                ${year}
            </span>
        </div>
    `

    return movieCard
}
