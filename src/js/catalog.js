import { userLibrary } from '../index.js';
import Book from './book.js';

export default function makeCatalog() {
    const catalog = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'This is the Catalog';
    headline.classList.add('headline');

    catalog.appendChild(headline);
    catalog.appendChild(addBookForm());

    return catalog;
}

function addBookForm() {
    const form = document.createElement('form');
    form.classList.add('addBookForm');

    const titleLabel = document.createElement('lable');
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

    const authorLabel = document.createElement('lable');
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

    const pagesLabel = document.createElement('lable');
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

    const readDropdown = document.createElement('select');
    readDropdown.name = 'read';
    readDropdown.required = true;

    const optionYes = document.createElement('option');
    optionYes.value = 'true';
    optionYes.textContent = 'Read';
    readDropdown.appendChild(optionYes);
    
    const optionNo = document.createElement('option');
    optionNo.value = 'false';
    optionNo.textContent = 'Unread';
    readDropdown.appendChild(optionNo);

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
        const read = event.target.read.value === 'true';

        const newBook = new Book(title, author, pages, read);
        userLibrary.push(newBook);

        form.reset();
    })

    return form;
}