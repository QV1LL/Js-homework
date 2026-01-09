const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`,
    },
}

export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export interface Movie {
    id: number
    title: string
    poster: string | null
    backdrop: string | null
    year: string
    overview: string
    originalLanguage: string
}

export interface RawMovie {
    id: number
    title?: string
    name?: string
    original_language: string
    release_date?: string
    first_air_date?: string
    poster_path?: string | null
    backdrop_path?: string | null
    overview?: string
}

interface SearchResult {
    films: []
    totalPages: number
}

export interface SearchParams {
    title: string
    type: 'movie' | 'tv'
    page?: number
}

export const searchMovies = async ({ title, type, page }: SearchParams): Promise<SearchResult> => {
    const url = `https://api.themoviedb.org/3/search/${type}?query=${encodeURIComponent(title)}&language=uk-UA&page=${
        page ?? 1
    }`

    try {
        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error('Something went wrong')
        }

        const data = await response.json()

        return {
            films: data.results.map(normalizeMovie) || [],
            totalPages: data.total_pages,
        }
    } catch (error) {
        console.error(error)
        return { films: [], totalPages: 0 }
    }
}

export const normalizeMovie = (data: RawMovie): Movie => {
    const title = data.title || data.name || 'Untitled'

    const dateStr = data.release_date || data.first_air_date || ''
    const year = dateStr ? new Date(dateStr).getFullYear().toString() : 'N/A'

    const poster = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null
    const backdrop = data.backdrop_path ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}` : null

    return {
        id: data.id,
        title,
        poster,
        backdrop,
        year,
        overview: data.overview || '',
        originalLanguage: data.original_language,
    }
}
