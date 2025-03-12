// Task: Create an array of JavaScript objects where each book belongs to a specific category,
// and implement a filtering functionality that allows the user to sort books by category.

// Before you start:
// 1. Go to the "image" folder and identify the relevant books you want to include in the array.
// 2. Use websites like saxo.dk or amazon.co.uk to find detailed information about each book.
// 3. Each book must have a **category** (e.g., "fiction", "non-fiction", "science", etc.).
// 4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.
// TIP: Use the method from the previous task where we sorted movies and apply `.filter()` to your array.

// Example: Array of books categorized by genre
// Fiction
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" }

"use strict";

// Array af bøger
const books = [
    {title: "1984", author: "George Orwell", category: "fiction", publishedYear: 1949, pages: 328, images:"/img/1984.webp" },
    {title: "A Brief History of Time", author: "Stephen Hawking", category: "science", publishedYear: 1988, pages: 256, images:"/img/a-brief-history-of-time.webp" },
    {title: "A Game of Thrones", author: "George R.R. Martin", category: "fantasy", publishedYear: 1996, pages: 694, images:"/img/a-game-of-thrones.webp" },
    {title: "A People's History of the United States", author: "Howard Zinn", category: "history", publishedYear: 1980, pages: 729, images:"/img/a-peoples-history-of-the-united-states.webp" },
    {title: "Becoming", author: "Michelle Obama", category: "non-fiction", publishedYear: 2018, pages: 448, images:"/img/becoming.webp" },
    {title: "Cosmos", author: "Carl Sagan", category: "science", publishedYear: 1980, pages: 384, images:"/img/cosmos.webp" },
    {title: "Dracula", author: "Bram Stoker", category: "horror", publishedYear: 1897, pages: 418, images:"/img/dracula.webp" },
    {title: "Educated", author: "Tara Westover", category: "non-fiction", publishedYear: 2018, pages: 352, images:"/img/educated.webp" },
    {title: "Essentials of Classic Italian Cooking", author: "Marcella Hazan", category: "cookbook", publishedYear: 1992, pages: 704, images:"/img/essentials-of-classic-italian-cooking.webp" },
    {title: "Frankenstein", author: "Mary Shelley", category: "fiction", publishedYear: 1818, pages: 280, images:"/img/frankenstein.webp" },
    {title: "Guns, Germs, and Steel", author: "Jared Diamond", category: "history", publishedYear: 1997, pages: 480, images:"/img/guns-germs-and-steel.webp" },
    {title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "fantasy", publishedYear: 1997, pages: 309, images:"/img/harry-potter-and-the-sorcerers-stone.webp" },
    {title: "It", author: "Stephen King", category: "horror", publishedYear: 1986, pages: 1138, images:"/img/it.webp" },
    {title: "Mastering the Art of French Cooking", author: "Julia Child", category: "cookbook", publishedYear: 1961, pages: 684, images:"/img/mastering-the-art-of-french-cooking.webp" },
    {title: "Pride and Prejudice", author: "Jane Austen", category: "fiction", publishedYear: 1813, pages: 279, images:"/img/pride-and-prejudice.webp" },
    {title: "Salt, Fat, Acid, Heat", author: "Samin Nosrat", category: "cookbook", publishedYear: 2017, pages: 480, images:"/img/salt-fat-acid-heat.webp" },
    {title: "Sapiens", author: "Yuval Noah Harari", category: "history", publishedYear: 2011, pages: 443, images:"/img/sapiens.webp" },
    {title: "SPQR: A History of Ancient Rome", author: "Mary Beard", category: "history", publishedYear: 2015, pages: 608, images:"/img/spqr-a-history-of-ancient-rome.webp" },
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" },
    {title: "The Hobbit", author: "J.R.R. Tolkien", category: "fantasy", publishedYear: 1937, pages: 310, images:"/img/the-hobbit.webp" },
    {title: "The Joy of Cooking", author: "Irma S. Rombauer", category: "cookbook", publishedYear: 1931, pages: 1152, images:"/img/the-joy-of-cooking.webp" },
    {title: "The Name of the Wind", author: "Patrick Rothfuss", category: "fantasy", publishedYear: 2007, pages: 662, images:"/img/the-name-of-the-wind.webp" },
    {title: "The Power of Habit", author: "Charles Duhigg", category: "non-fiction", publishedYear: 2012, pages: 371, images:"/img/the-power-of-habit.webp" },
    {title: "The Selfish Gene", author: "Richard Dawkins", category: "science", publishedYear: 1976, pages: 360, images:"/img/the-selfish-gene.webp" },
    {title: "The Shining", author: "Stephen King", category: "horror", publishedYear: 1977, pages: 447, images:"/img/the-shining.webp" },
    {title: "The Silk Roads", author: "Peter Frankopan", category: "history", publishedYear: 2015, pages: 636, images:"/img/the-silk-roads.webp" },
    {title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction", publishedYear: 1960, pages: 281, images:"/img/to-kill-a-mockingbird.webp" }
];

// Henter HTML-elementerne
const booksContainer = document.getElementById("books-container");
const selectedCategory = document.getElementById("category-select");

// Funktion til at vise bøger i DOM'en
function displayBooks(bookList) {
    if (!booksContainer) return; // Sikrer, at containeren findes

    booksContainer.innerHTML = ""; // Tømmer containeren for at undgå dubletter

    bookList.forEach((book) => {
        // Opretter et HTML-element (article)
        const bookElement = document.createElement("article");

        // Opbygger HTML-strukturen for hver bog
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Forfatter: ${book.author}</p>
            <p>Kategori: ${book.category}</p>
            <p>Udgivelsesår: ${book.publishedYear}</p>
            <p>Sider: ${book.pages}</p>
            <figure>
                <img src="${book.images}" alt="${book.title}">
            </figure>`;

        // Tilføjer bookElement til booksContainer
        booksContainer.appendChild(bookElement);
    });
}

// Indlæser alle bøger ved første sideindlæsning
displayBooks(books);

// Tilføjer event listener til category-select for at filtrere bøgerne
if (selectedCategory) {
    selectedCategory.addEventListener("change", () => {
        const selectedValue = selectedCategory.value; // Henter den valgte kategori

        let filteredBooks = selectedValue === "all" 
            ? books 
            : books.filter(book => book.category === selectedValue); 

        displayBooks(filteredBooks);
    });
}



   