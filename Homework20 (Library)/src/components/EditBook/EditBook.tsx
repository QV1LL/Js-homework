import { useState } from 'react'
import type { Book } from '../../types/book'
import styles from './EditBook.module.css'

interface EditBookProps {
    title?: string
    book: Book
    onSubmit: (updatedBook: Book) => void
}

type Errors = Partial<Record<keyof Book, string>>

const EditBook = ({ book, onSubmit, title = 'Edit Book Details' }: EditBookProps) => {
    const [draft, setDraft] = useState<Book>({ ...book })
    const [errors, setErrors] = useState<Errors>({})

    const validateInputs = (): boolean => {
        const newErrors: Errors = {}

        if (!draft.title.trim()) newErrors.title = 'Title is required'
        if (!draft.author.trim()) newErrors.author = 'Author is required'

        if (!draft.releaseYear) {
            newErrors.releaseYear = 'Year is required'
        } else if (draft.releaseYear > 2026 || draft.releaseYear < 1000) {
            newErrors.releaseYear = 'Enter a valid year (1000-2026)'
        }

        if (!draft.description.trim()) {
            newErrors.description = 'Description is required'
        } else if (draft.description.length < 10) {
            newErrors.description = 'Description must be at least 10 characters'
        }

        if (draft.posterUrl && !draft.posterUrl.startsWith('http')) {
            newErrors.posterUrl = 'URL must start with http/https'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target

        setErrors((prev) => ({ ...prev, [name]: undefined }))
        setDraft((prev: Book) => ({
            ...prev,
            [name]: type === 'number' ? (value === '' ? 0 : Number(value)) : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateInputs()) {
            onSubmit(draft)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Poster URL</label>
                <input
                    name="posterUrl"
                    className={`${styles.input} ${styles.inputSmall} ${errors.posterUrl ? styles.errorInput : ''}`}
                    placeholder="https://example.com/image.jpg"
                    value={draft.posterUrl || ''}
                    onChange={handleChange}
                />
                {errors.posterUrl && <span className={styles.errorText}>{errors.posterUrl}</span>}
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Title</label>
                <input
                    name="title"
                    className={`${styles.input} ${errors.title ? styles.errorInput : ''}`}
                    value={draft.title}
                    onChange={handleChange}
                />
                {errors.title && <span className={styles.errorText}>{errors.title}</span>}
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Author</label>
                <input
                    name="author"
                    className={`${styles.input} ${errors.author ? styles.errorInput : ''}`}
                    value={draft.author}
                    onChange={handleChange}
                />
                {errors.author && <span className={styles.errorText}>{errors.author}</span>}
            </div>

            <div className={styles.grid}>
                <div className={styles.fieldGroup}>
                    <label className={styles.label}>Year</label>
                    <input
                        name="releaseYear"
                        type="number"
                        className={`${styles.input} ${errors.releaseYear ? styles.errorInput : ''}`}
                        value={draft.releaseYear || ''}
                        onChange={handleChange}
                    />
                    {errors.releaseYear && <span className={styles.errorText}>{errors.releaseYear}</span>}
                </div>
                {draft.posterUrl && !errors.posterUrl && (
                    <div className={styles.fieldGroup}>
                        <label className={styles.label}>Preview</label>
                        <img src={draft.posterUrl} className={styles.previewImage} alt="preview" />
                    </div>
                )}
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Description</label>
                <textarea
                    name="description"
                    className={`${styles.textarea} ${errors.description ? styles.errorInput : ''}`}
                    value={draft.description}
                    onChange={handleChange}
                />
                {errors.description && <span className={styles.errorText}>{errors.description}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
                Save Changes
            </button>
        </form>
    )
}

export default EditBook
