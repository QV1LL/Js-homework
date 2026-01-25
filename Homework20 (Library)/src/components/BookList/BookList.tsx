import { useState } from 'react'
import type { Book } from '../../types/book'
import EditBook from '../EditBook/EditBook'
import styles from './BookList.module.css'

type BookListProps = {
    books: Book[]
    onBookChange: (book: Book) => void
    onBookRemove: (id: string) => void
}

const BookList = ({ books, onBookChange, onBookRemove }: BookListProps) => {
    const [editingBookId, setEditingBookId] = useState<string | null>(null)

    const handleUpdate = (updatedBook: Book) => {
        onBookChange(updatedBook)
        setEditingBookId(null)
    }

    return (
        <ul className={styles.list}>
            {books.map((book) => (
                <li key={book.id} className={styles.card}>
                    <div className={styles.posterWrapper}>
                        {book.posterUrl ? (
                            <img src={book.posterUrl} alt={book.title} className={styles.poster} />
                        ) : (
                            <div className={styles.noPoster}>No Poster</div>
                        )}

                        <div className={styles.actions}>
                            <button
                                onClick={() => setEditingBookId(book.id)}
                                className={`${styles.actionBtn} ${styles.editBtn}`}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onBookRemove(book.id)}
                                className={`${styles.actionBtn} ${styles.removeBtn}`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h3 className={styles.title}>{book.title}</h3>
                            <span className={styles.year}>{book.releaseYear}</span>
                        </div>
                        <p className={styles.author}>{book.author}</p>
                        <p className={styles.description}>"{book.description}"</p>
                    </div>

                    {editingBookId === book.id && (
                        <div className={styles.modalOverlay}>
                            <div className={styles.modalContent}>
                                <EditBook book={book} onSubmit={handleUpdate} />
                                <button className={styles.cancelBtn} onClick={() => setEditingBookId(null)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default BookList
