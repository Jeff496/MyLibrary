import { userLibrary } from "../index.js";
import { readStatus } from "./book.js";
import expandIcon from "../img/expandIcon.png";
import collapseIcon from "../img/collapseIcon.png";
import { loadUserLibrary, saveUserLibrary } from "./updateStore.js";

export const buttonOption = {
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
    bookList.appendChild(makeBookCards(book, buttonOption.REMOVE, index));
  });

  return bookList;
}

export function makeBookCards(book, buttonOpt, index = -1) {
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

  // remove/add book button
  const addBookButton = document.createElement("button");
  addBookButton.style.cursor = "pointer";

  if (buttonOpt === buttonOption.REMOVE) {
    bookCard.appendChild(
      removeBookButton(index, bookCard, addBookButton, book) // addBookButton parameter for updating button state
    );
  } else {
    bookCard.appendChild(addButton(addBookButton, book));
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
  bookCard.appendChild(expand);

  // collapse to hide description
  const collapse = document.createElement("img");
  collapse.id = "collapse";
  collapse.src = collapseIcon;
  collapse.alt = "collapse button";
  collapse.addEventListener("click", () => {
    description.style.display = "none";
    collapse.style.display = "none";
    expand.style.display = "block";
  });

  // description
  const description = document.createElement("p");
  description.textContent = book.description;
  bookCard.appendChild(description);

  bookCard.appendChild(collapse);

  return bookCard;
}

function removeBookButton(index, bookCard, buttonToUpdate, book) {
  const removeBookButton = document.createElement("button");
  removeBookButton.style.cursor = "pointer";
  removeBookButton.textContent = "Remove Book";
  removeBookButton.addEventListener("click", () => {
    userLibrary.splice(index, 1);
    bookCard.remove();
    updateButtonState(buttonToUpdate, book);
    saveUserLibrary();
  });

  return removeBookButton;
}

// only used to add books from carousel
function addButton(addBookButton, book) {
  updateButtonState(addBookButton, book);
  if (!alreadyInLibrary(book)) {
    addBookButton.addEventListener("click", () => {
      userLibrary.push(book);
      saveUserLibrary();
      updateButtonState(addBookButton, book);
    });
  }
  return addBookButton;
}

function updateButtonState(addButton, book) {
  if (alreadyInLibrary(book)) {
    addButton.textContent = "In BookList";
    addButton.disabled = true;
  } else {
    addButton.textContent = "Add Book";
    addButton.disabled = false;
  }
}

function alreadyInLibrary(book) {
  return userLibrary.some(
    (bookExists) =>
      bookExists.title === book.title && bookExists.author === book.author
  );
}
