import { userLibrary } from "../index.js";

export default function makeHome() {
    const home = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome the Library';
    headline.classList.add('headline');
    home.appendChild(headline);

    const form = document.createElement('form');
    home.appendChild(form);

    const addBookButton = document.createElement('button');
    addBookButton.textContent = 'Add New Book';
    home.append(addBookButton);
    

    return home;
}