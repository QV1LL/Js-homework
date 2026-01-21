import { useState } from 'react'

type CarouselProps = {
    images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => setCurrentIndex((current) => (current + 1) % images.length)
    const handlePrevious = () => setCurrentIndex((current) => (current - 1 + images.length) % images.length)

    return (
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="min-w-full aspect-video">
                        <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-500 shadow-md flex items-center justify-center transition-all hover:bg-gray-50 hover:text-gray-700 active:scale-90 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-gray-500 shadow-md flex items-center justify-center transition-all hover:bg-gray-50 hover:text-gray-700 active:scale-90 opacity-0 group-hover:opacity-100 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${
                            currentIndex === i ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
