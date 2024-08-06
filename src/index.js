"use strict";

import './styles.css';
import Book from './js/book.js';
import makeHome from './js/home.js';
import makeBooks from './js/bookList.js';
import makeCatalog from './js/catalog.js';


// creating and adding user books

export const userLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    userLibrary.push(newBook);
}

addBookToLibrary('1984', 'George Orwell', 324, true);
addBookToLibrary('fakeBook', 'fake Author', 234, false);
addBookToLibrary('fakeBook2', 'fake Author', 548, false);

// switching tabs

function clearPage() {
    const content = document.getElementById('content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function switchTab(newTab) {
    clearPage();
    const content = document.getElementById('content');
    content.appendChild(newTab());
}

document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.querySelector('li:nth-of-type(1)');
    const booksTab = document.querySelector('li:nth-of-type(2)');
    const catalogTab = document.querySelector('li:nth-of-type(3)');

    homeTab.addEventListener('click', () => switchTab(makeHome));
    booksTab.addEventListener('click', () => switchTab(makeBooks));
    catalogTab.addEventListener('click', () => switchTab(makeCatalog));

    switchTab(makeCatalog);
})