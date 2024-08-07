"use strict";

import "./styles.css";
import Book, { readStatus } from "./js/book.js";
import makeHome from "./js/home.js";
import makeBooks from "./js/bookList.js";
import makeCatalog from "./js/catalog.js";

// user library
export const userLibrary = [];

// test books: to be removed
function addBookToLibrary(title, author, pages, read, description) {
  const newBook = new Book(title, author, pages, read, description);
  userLibrary.push(newBook);
}

addBookToLibrary(
  "1984",
  "George Orwell",
  324,
  readStatus.READ,
  "It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother.",
);
addBookToLibrary("fakeBook", "fake Author", 234, readStatus.READING, "hello");
addBookToLibrary(
  "fakeBook2",
  "fake Author",
  548,
  readStatus.WANT_TO_READ,
  "helllooooooo?",
);

// switching tabs
function clearPage() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function switchTab(newTab) {
  clearPage();
  const content = document.getElementById("content");
  content.appendChild(newTab());
}

document.addEventListener("DOMContentLoaded", () => {
  const homeTab = document.querySelector("li:nth-of-type(1)");
  const booksTab = document.querySelector("li:nth-of-type(2)");
  const catalogTab = document.querySelector("li:nth-of-type(3)");

  homeTab.addEventListener("click", () => switchTab(makeHome));
  booksTab.addEventListener("click", () => switchTab(makeBooks));
  catalogTab.addEventListener("click", () => switchTab(makeCatalog));

  switchTab(makeBooks);
});
