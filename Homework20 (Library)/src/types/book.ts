export interface Book {
    id: string
    title: string
    author: string
    releaseYear: number
    description: string
    posterUrl?: string
}

export const initialBooks: Book[] = [
    {
        id: crypto.randomUUID(),
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        releaseYear: 1925,
        description:
            'A story of ambition, wealth, and the tragic pursuit of the American Dream in the Roaring Twenties.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: '1984',
        author: 'George Orwell',
        releaseYear: 1949,
        description:
            'A dystopian nightmare about a totalitarian regime that uses surveillance and mind control to maintain power.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        releaseYear: 1960,
        description: 'A profound exploration of racial injustice and the loss of innocence in the American South.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        releaseYear: 1937,
        description:
            'A grand adventure of a quiet hobbit who joins a quest to reclaim a stolen treasure from a dragon.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        releaseYear: 1953,
        description: 'In a future where books are banned and burned, one fireman begins to question the status quo.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Brave New World',
        author: 'Aldous Huxley',
        releaseYear: 1932,
        description:
            'A chilling vision of a highly engineered society where pleasure is mandatory and individuality is gone.',
        posterUrl: 'https://upload.wikimedia.org/wikipedia/ru/6/62/BraveNewWorld_FirstEdition.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        releaseYear: 1951,
        description: "The classic tale of teenage rebellion and the struggle to find authenticity in a 'phony' world.",
        posterUrl: 'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Dune',
        author: 'Frank Herbert',
        releaseYear: 1965,
        description: 'An epic space opera involving interstellar politics, religion, and the control of a vital spice.',
        posterUrl: 'https://m.media-amazon.com/images/I/81Ua99CURsL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        releaseYear: 1813,
        description: 'A witty social commentary on marriage, class, and manners in 19th-century England.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        releaseYear: 1988,
        description: 'An inspirational fable about following your dreams and listening to your heart.',
        posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QI07TJd1sOaOrcCo0MVSNliKOXjiDgEJ9g&s',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Book Thief',
        author: 'Markus Zusak',
        releaseYear: 2005,
        description: 'Set in Nazi Germany, a young girl finds solace in stealing books and sharing them with others.',
        posterUrl: 'https://m.media-amazon.com/images/I/81cQAtrq2iL._UF1000,1000_QL80_.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        releaseYear: 1866,
        description: 'A deep psychological dive into the mind of a man who commits murder to prove a theory.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Road',
        author: 'Cormac McCarthy',
        releaseYear: 2006,
        description: 'A father and son walk through a post-apocalyptic landscape in a brutal struggle for survival.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Martian',
        author: 'Andy Weir',
        releaseYear: 2011,
        description: 'An astronaut is stranded on Mars and must use his scientific ingenuity to survive until rescue.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Foundation',
        author: 'Isaac Asimov',
        releaseYear: 1951,
        description: 'The story of a group of scientists trying to preserve knowledge as a galactic empire collapses.',
        posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW5_OHaYMdQJeUt_TyCbrAzpUtMgpOG4O6A&s',
    },
    {
        id: crypto.randomUUID(),
        title: 'A Game of Thrones',
        author: 'George R.R. Martin',
        releaseYear: 1996,
        description:
            'Noble families compete for control of the Iron Throne in a land where summers and winters last years.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562726234i/13496.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Little Women',
        author: 'Louisa May Alcott',
        releaseYear: 1868,
        description: 'The lives, loves, and tribulations of four sisters growing up during the American Civil War.',
        posterUrl: 'https://m.media-amazon.com/images/I/81XxP9qyfzL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        releaseYear: 2011,
        description: 'A brief history of humankind, exploring how biology and history have defined us.',
        posterUrl: 'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/7/1/71ukqqzd-vl.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'The Shining',
        author: 'Stephen King',
        releaseYear: 1977,
        description:
            'A family stays in an isolated hotel for the winter, where a sinister presence influences the father.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg',
    },
    {
        id: crypto.randomUUID(),
        title: 'Neuromancer',
        author: 'William Gibson',
        releaseYear: 1984,
        description: 'The foundational cyberpunk novel about a washed-up computer hacker hired for one last job.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg',
    },
]
