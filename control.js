// JavaScript code to handle book clicks and navigation
const books = document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener('click', () => {
        // Redirect to a book detail page or display more information
        // Example: window.location.href = 'book-details.html';
    });
});

