import { userLibrary } from '../index.js';
import Book, { readStatus } from './book.js';

export default function makeCatalog() {
    const catalog = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'The Catalog';
    headline.classList.add('headline');

    catalog.appendChild(headline);
    catalog.appendChild(addBookForm());

    return catalog;
}

function addBookForm() {
    const form = document.createElement('form');
    form.classList.add('addBookForm');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Book Title: ';
    titleLabel.htmlFor = 'titlefield';

    const titleField = document.createElement('input');
    titleField.type = 'text';
    titleField.placeholder = 'Title';
    titleField.name = 'title';
    titleField.required = true;
    titleField.id = 'titlefield';
    form.appendChild(titleLabel);
    form.appendChild(titleField);

    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author name: ';
    authorLabel.htmlFor = 'authorfield';

    const authorField = document.createElement('input');
    authorField.type = 'text';
    authorField.placeholder = 'Author';
    authorField.name = 'author';
    authorField.required = true;
    authorField.id = 'authorfield';
    form.appendChild(authorLabel);
    form.appendChild(authorField);

    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = 'Number of Pages: ';
    pagesLabel.htmlFor = 'pagesfield';

    const pagesField = document.createElement('input');
    pagesField.type = 'number';
    pagesField.placeholder = 'Pages';
    pagesField.name = 'pages';
    pagesField.required = true;
    pagesField.id = 'pagesfield';
    form.appendChild(pagesLabel);
    form.appendChild(pagesField);

    // read status

    const readDropdown = document.createElement('select');
    readDropdown.name = 'read';
    readDropdown.required = true;

    const read = document.createElement('option');
    read.value = readStatus.READ;
    read.textContent = 'Read';
    readDropdown.appendChild(read);
    
    const reading = document.createElement('option');
    reading.value = readStatus.READING;
    reading.textContent = 'Reading';
    readDropdown.appendChild(reading);

    const want_to_read = document.createElement('option');
    want_to_read.value = readStatus.WANT_TO_READ;
    want_to_read.textContent = 'Want to Read';
    readDropdown.appendChild(want_to_read);

    const unread = document.createElement('option');
    unread.value = readStatus.UNREAD;
    unread.textContent = 'Unread';
    readDropdown.appendChild(unread);

    form.appendChild(readDropdown);

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Add Book';
    form.appendChild(submit);

    // form submission

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const author = event.target.author.value;
        const pages = event.target.pages.value;
        const read = event.target.read.value;

        const newBook = new Book(title, author, pages, read);
        userLibrary.push(newBook);

        form.reset();
    })

    return form;
}