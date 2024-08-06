import { userLibrary } from '../index.js';

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
        
        const read = document.createElement('h3');
        read.textContent = `Read: ${book.read ? 'yes' : 'no'}`

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);

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