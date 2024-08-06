import { userLibrary } from '../index.js';

export default function makeBooks() {
    const bookList = document.createElement('div');
    bookList.classList.add('headline');

    const headline = document.createElement('h1');
    headline.textContent = 'The BookList';
    bookList.appendChild(headline);


    for (let book of userLibrary) {
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

        bookList.appendChild(bookCard);        
    }

    return bookList;
}