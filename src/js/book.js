export default class Book {
    title = 'Unknown';
    author = 'Unknown';
    pages = 0;
    read = false;

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    displayInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, Read: ${this.read}`;
    }
}