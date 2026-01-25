import { useState } from 'react'
import type { Book } from '../../types/book'
import BookList from '../../components/BookList/BookList'
import EditBook from '../../components/EditBook/EditBook'
import styles from './BooksPage.module.css'

type BooksPageProps = {
    initialBooks: Book[]
}

type SortCategory = 'title' | 'year'

const BooksPage = ({ initialBooks }: BooksPageProps) => {
    const [books, setBooks] = useState<Book[]>(initialBooks)
    const [isAdding, setIsAdding] = useState<boolean>(false)

    const [searchQuery, setSearchQuery] = useState<string>('')
    const [activeSearch, setActiveSearch] = useState<string>('')
    const [sortBy, setSortBy] = useState<SortCategory>('title')

    const handleBookChange = (updatedBook: Book) => {
        setBooks(books.map((book) => (updatedBook.id === book.id ? updatedBook : book)))
    }

    const handleBookRemove = (id: string) => {
        setBooks(books.filter((book) => book.id !== id))
    }

    const handleAddNewBook = (newBook: Book) => {
        setBooks([...books, { ...newBook, id: crypto.randomUUID() }])
        setIsAdding(false)
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setActiveSearch(searchQuery)
    }

    const filteredBooks = books
        .filter(
            (book) =>
                book.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
                book.author.toLowerCase().includes(activeSearch.toLowerCase()),
        )
        .sort((a, b) => {
            if (sortBy === 'title') return a.title.localeCompare(b.title)
            return b.releaseYear - a.releaseYear
        })

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1 className={styles.logo}>Library</h1>

                    <div className={styles.controls}>
                        <form onSubmit={handleSearch} className={styles.searchForm}>
                            <input
                                type="text"
                                placeholder="Search title or author..."
                                className={styles.input}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit" className={styles.searchBtn}>
                                Search
                            </button>
                        </form>

                        <select
                            className={styles.select}
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortCategory)}
                        >
                            <option value="title">Sort by Title</option>
                            <option value="year">Newest First</option>
                        </select>

                        <button onClick={() => setIsAdding(true)} className={styles.addBtn}>
                            + Add Book
                        </button>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <BookList books={filteredBooks} onBookChange={handleBookChange} onBookRemove={handleBookRemove} />
            </main>

            {isAdding && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalBox}>
                        <EditBook
                            title="Add New Book"
                            book={{ id: '', title: '', author: '', releaseYear: 2026, description: '', posterUrl: '' }}
                            onSubmit={handleAddNewBook}
                        />
                        <button className={styles.cancelLink} onClick={() => setIsAdding(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BooksPage
