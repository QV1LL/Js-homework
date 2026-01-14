import React from 'react'

interface Book {
    title: string
    author: string
    genre: string
    pageCount: number
    reviews: string[]
    imageUrl: string
}

const BookInfo: React.FC<Book> = ({ title, author, genre, pageCount, reviews, imageUrl }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-72 h-64 md:h-auto shrink-0 bg-gray-200">
                <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
            </div>

            <div className="p-6 flex flex-col justify-center w-full">
                <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h2>
                    <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
                        {genre}
                    </span>
                </div>

                <p className="mt-2 text-lg text-gray-600 font-medium">by {author}</p>

                <p className="mt-1 text-sm text-gray-400">{pageCount} pages</p>

                <div className="mt-6 border-t border-gray-100 pt-4">
                    <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Recent Reviews</h3>
                    <ul className="space-y-2">
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <li key={index} className="text-sm text-gray-600 italic">
                                    "{review}"
                                </li>
                            ))
                        ) : (
                            <li className="text-sm text-gray-400">No reviews yet</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

class BookInfoClassComponent extends React.Component<Book> {
    render() {
        const { title, author, genre, pageCount, reviews, imageUrl } = this.props

        return (
            <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
                <div className="w-full md:w-72 h-64 md:h-auto shrink-0 bg-gray-200">
                    <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
                </div>

                <div className="p-6 flex flex-col justify-center w-full">
                    <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold text-gray-800 leading-tight">{title}</h2>
                        <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
                            {genre}
                        </span>
                    </div>

                    <p className="mt-2 text-lg text-gray-600 font-medium">by {author}</p>

                    <p className="mt-1 text-sm text-gray-400">{pageCount} pages</p>

                    <div className="mt-6 border-t border-gray-100 pt-4">
                        <h3 className="text-sm font-bold text-gray-700 uppercase mb-2">Recent Reviews</h3>
                        <ul className="space-y-2">
                            {reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <li key={index} className="text-sm text-gray-600 italic">
                                        "{review}"
                                    </li>
                                ))
                            ) : (
                                <li className="text-sm text-gray-400">No reviews yet</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookInfo
