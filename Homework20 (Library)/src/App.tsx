import BooksPage from './pages/BookPage/BooksPage'
import { initialBooks } from './types/book'

function App() {
    return <BooksPage initialBooks={initialBooks} />
}

export default App
