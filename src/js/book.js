const readStatus = {
    READ: 'read',
    READING: 'reading',
    WANT_TO_READ: 'want-to-read',
    UNREAD: 'unread'
};

export default class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}