import { userLibrary } from "../index.js";
import { readStatus } from "./book.js";
import expandIcon from "../img/expandIcon.png";
import collapseIcon from "../img/collapseIcon.png";
import { loadUserLibrary, saveUserLibrary } from "./updateStore.js";

const buttonOption = {
  ADD: "add",
  REMOVE: "remove",
};

export function makeBooks() {
  loadUserLibrary();

  const bookList = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "The BookList";
  headline.classList.add("headline");

  bookList.appendChild(headline);

  userLibrary.forEach((book, index) => {
    bookList.appendChild(
      makeBookCards(bookList, book, index, buttonOption.REMOVE)
    );
  });

  return bookList;
}

export function makeBookCards(bookList, book, index, buttonOpt) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const title = document.createElement("h2");
  title.textContent = book.title;
  bookCard.appendChild(title);

  const author = document.createElement("h3");
  author.textContent = `Author: ${book.author}`;
  bookCard.appendChild(author);

  const pages = document.createElement("h3");
  pages.textContent = `Pages: ${book.pages}`;
  bookCard.appendChild(pages);

  // read status
  const readDropdown = document.createElement("select");
  Object.values(readStatus).forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent =
      status.charAt(0).toUpperCase() + status.slice(1).replaceAll("-", " ");
    readDropdown.appendChild(option);
  });

  readDropdown.value = book.read;
  bookCard.appendChild(readDropdown);

  readDropdown.addEventListener("change", () => {
    book.read = readDropdown.value;
    saveUserLibrary();
  });

  // div to contain both remove/add button and expand button for flexbox purposes
  const container = document.createElement("div");
  container.classList.add("container");

  // remove/add book button
  if (buttonOpt === buttonOption.REMOVE) {
    container.appendChild(removeBookButton(bookList, index, bookCard));
  } else {
    container.appendChild(addBookButton(book));
  }

  // expand to show description
  const expand = document.createElement("img");
  expand.src = expandIcon;
  expand.alt = "expand button";
  expand.addEventListener("click", () => {
    description.style.display = "block";
    collapse.style.display = "block";
    expand.style.display = "none";
  });
  container.appendChild(expand);

  bookCard.appendChild(container);

  // collapse to hide description
  const endContainer = document.createElement("div");
  endContainer.classList.add("endContainer");

  const collapse = document.createElement("img");
  collapse.src = collapseIcon;
  collapse.alt = "collapse button";
  collapse.addEventListener("click", () => {
    description.style.display = "none";
    collapse.style.display = "none";
    expand.style.display = "block";
  });
  endContainer.appendChild(collapse);

  // description
  const description = document.createElement("p");
  description.textContent = book.description;
  bookCard.appendChild(description);

  bookCard.appendChild(endContainer);

  return bookCard;
}

function removeBookButton(bookList, index, bookCard) {
  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "Remove Book";
  removeBookButton.addEventListener("click", () => {
    userLibrary.splice(index, 1);
    bookList.removeChild(bookCard);
    saveUserLibrary();
  });

  return removeBookButton;
}

// only used to add books from carousel
function addBookButton(book) {
  const addBookButton = document.createElement("button");
  addBookButton.textContent = "Add Book";
  addBookButton.addEventListener("click", () => {
    userLibrary.push(book);
    saveUserLibrary();
  });

  return addBookButton;
}
