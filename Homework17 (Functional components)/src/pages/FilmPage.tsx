export interface Film {
    title: string
    description: string
    director: string
    releaseYear: number
    studio: string
    posterUrl: string
    backdropUrl: string
}
const FilmPage = ({ title, description, director, releaseYear, studio, posterUrl, backdropUrl }: Film) => {
    return (
        <div
            className="relative size-full flex items-center justify-center p-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${backdropUrl})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

            <div className="relative z-10 max-w-5xl w-full">
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                    <div className="shrink-0 w-64 lg:w-80 shadow-2xl shadow-orange-500/20 rounded-lg overflow-hidden border border-white/10">
                        <img
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            src={posterUrl}
                            alt={title}
                        />
                    </div>

                    <div className="flex-1 text-white text-center md:text-left pt-4">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm mb-4">
                            <span className="bg-orange-600 px-2 py-0.5 rounded text-white font-bold uppercase tracking-wider text-xs">
                                HD
                            </span>
                            <span className="text-gray-300 font-medium">{releaseYear}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-300">{studio}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">{title.toUpperCase()}</h1>

                        <div className="flex flex-col gap-2 mb-8">
                            <p className="text-xl text-gray-300">
                                <span className="text-orange-500 font-semibold italic">Directed by</span> {director}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-300 font-medium">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmPage
