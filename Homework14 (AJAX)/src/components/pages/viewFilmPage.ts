import type { Movie } from '../../services/filmsService'

export const getViewFilmPage = (movie: Movie, onBack: () => void): HTMLElement => {
    const wrapper = document.createElement('div')
    wrapper.className = 'relative min-h-screen w-full bg-gray-900 text-white font-sans'

    const backdropUrl = movie.backdrop
        ? `https://image.tmdb.org/t/p/original${movie.backdrop}`
        : 'https://placehold.co/1920x1080?text=No+Backdrop'

    const posterUrl = movie.poster ? movie.poster : 'https://placehold.co/500x750?text=No+Poster'

    wrapper.innerHTML = `
        <div class="absolute inset-0 w-full h-full overflow-hidden">
            <img 
                src="${backdropUrl}" 
                alt="Background" 
                class="w-full h-full object-cover opacity-30 blur-sm scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-black/60"></div>
        </div>

        <div class="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 items-start justify-center h-full">
            
            <div class="w-full max-w-sm mx-auto md:mx-0 shrink-0">
                <img 
                    src="${posterUrl}" 
                    alt="${movie.title}" 
                    class="w-full rounded-lg shadow-2xl border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
                />
            </div>

            <div class="flex flex-col gap-6 max-w-2xl mt-4 md:mt-0">
                
                <div>
                    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        ${movie.title} 
                        <span class="text-3xl md:text-5xl font-light text-gray-400 block md:inline md:ml-2">
                            (${movie.year})
                        </span>
                    </h1>
                </div>

                <div class="flex gap-4">
                    <button id="back-btn" class="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-colors backdrop-blur-md flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to List
                    </button>
                    <button class="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-colors shadow-lg shadow-yellow-500/20">
                        Watch Trailer
                    </button>
                </div>

                <div class="mt-4">
                    <h3 class="text-xl font-semibold text-gray-200 mb-2">Overview</h3>
                    <p class="text-lg text-gray-300 leading-relaxed">
                        ${movie.overview || 'No description available.'}
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-4 mt-6 border-t border-gray-700 pt-6">
                    <div>
                        <span class="block text-sm text-gray-400">Status</span>
                        <span class="font-medium">Released</span>
                    </div>
                    <div>
                        <span class="block text-sm text-gray-400">Original Language</span>
                        <span class="font-medium uppercase">${movie.originalLanguage}</span>
                    </div>
                </div>

            </div>
        </div>
    `

    wrapper.querySelector('#back-btn')?.addEventListener('click', onBack)

    return wrapper
}
