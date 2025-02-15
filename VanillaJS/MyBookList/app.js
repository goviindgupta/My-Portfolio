// Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector(".alert").remove(), 3000);
    }

    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn) {
        let books = Store.getBooks();
        // Filter out the book with the matching ISBN
        books = books.filter(book => book.isbn !== isbn);
        localStorage.setItem("books", JSON.stringify(books)); // Corrected typo
    }
}

// Event: Display Books on Page Load
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Validate input
    if (title === "" || author === "" || isbn === "") {
        UI.showAlert("Please fill in all fields", "danger");
    } else {
        // Instantiate a book
        const book = new Book(title, author, isbn);

        // Add book to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert("Book Added", "success");

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        // Remove book from UI
        UI.deleteBook(e.target);

        // Remove book from store (Fetch ISBN from the clicked row)
        const isbn = e.target.parentElement.previousElementSibling.textContent;
        Store.removeBook(isbn);

        // Show success message
        UI.showAlert("Book Removed", "success");
    }
});
