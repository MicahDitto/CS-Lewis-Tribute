// JavaScript code to handle book clicks and navigation
const books = document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener('click', () => {
        // Redirect to a book detail page or display more information
        // Example: window.location.href = 'book-details.html';
    });
});

const imageScroller = document.querySelector('.image-scroller');

let isDragging = false;
let startX;

imageScroller.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - imageScroller.offsetLeft;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageScroller.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the multiplier for scrolling speed
    imageScroller.scrollLeft = imageScroller.scrollLeft - walk;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});


