import { userLibrary } from '../index.js';
import { readStatus } from './book.js';

export default function makeBooks() {
    const bookList = document.createElement('div');
    
    const headline = document.createElement('h1');
    headline.textContent = 'The BookList';
    headline.classList.add('headline');

    bookList.appendChild(headline);


    userLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
    
        const title = document.createElement('h2');
        title.textContent = book.title;
        
        const author = document.createElement('h3');
        author.textContent = `Author: ${book.author}`;
        
        const pages = document.createElement('h3');
        pages.textContent = `Pages: ${book.pages}`;
        
        const readDropdown = document.createElement('select');
        Object.values(readStatus).forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = status.charAt(0).toUpperCase() + status.slice(1).replaceAll('-', ' ');
            readDropdown.appendChild(option);
        });

        readDropdown.value = book.read;

        readDropdown.addEventListener('change', () => {
            book.read = readDropdown.value;
        });

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readDropdown);

        // remove book button
        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = 'Remove Book';
        removeBookButton.addEventListener('click', () => {
            userLibrary.splice(index, 1);
            bookList.removeChild(bookCard);
        });
        bookCard.appendChild(removeBookButton);

        bookList.appendChild(bookCard);
    });

    return bookList;
}