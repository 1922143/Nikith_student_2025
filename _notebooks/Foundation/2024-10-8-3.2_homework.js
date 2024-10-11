const jsonData = `[
    {
        "bookId": "B001",
        "title": "1984",
        "author": "George Orwell",
        "publishedYear": 1949,
        "isAvailable": true,
        "genres": ["Dystopian", "Political Fiction"],
        "isbn": "978-0451524935",
        "description": "A novel that depicts a totalitarian society under constant surveillance."
    },
    {
        "bookId": "B002",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publishedYear": 1960,
        "isAvailable": true,
        "genres": ["Fiction", "Classic"],
        "isbn": "978-0061120084",
        "description": "A coming-of-age story that deals with serious issues of race and injustice."
    },
    {
        "bookId": "B003",
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publishedYear": 1951,
        "isAvailable": true,
        "genres": ["Fiction", "Young Adult"],
        "isbn": "978-0316769488",
        "description": "A story about teenage angst and alienation."
    },
    {
        "bookId": "B004",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedYear": 1925,
        "isAvailable": true,
        "genres": ["Fiction", "Classic"],
        "isbn": "978-0743273565",
        "description": "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan."
    },
    {
        "bookId": "B005",
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "publishedYear": 1932,
        "isAvailable": true,
        "genres": ["Dystopian", "Science Fiction"],
        "isbn": "978-0060850524",
        "description": "A dystopian novel that explores a future society driven by technological advancement."
    }
]`;

// Convert JSON string to JavaScript object
const books = JSON.parse(jsonData);

// Print the JavaScript object
console.log(books);