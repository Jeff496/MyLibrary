import { makeBookCards, buttonOption } from "./bookList";
import { featuredBooks, userLibrary } from "../index.js";
import leftArrow from "../img/leftArrow.svg";
import rightArrow from "../img/rightArrow.svg";

export default function makeHome() {
  const home = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the Library";
  headline.classList.add("headline");

  home.appendChild(headline);
  home.appendChild(imageCarousel());

  return home;
}

function imageCarousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  // left and right arrows
  const leftArrowButton = document.createElement("button");
  leftArrowButton.classList.add("leftArrowButton");
  leftArrowButton.innerHTML = `<img src="${leftArrow}" alt="Left Arrow Button">`;
  const rightArrowButton = document.createElement("button");
  rightArrowButton.classList.add("rightArrowButton");
  rightArrowButton.innerHTML = `<img src="${rightArrow}" alt="Left Arrow Button">`;

  // main display area
  const container = document.createElement("div");
  container.classList.add("carouselTrackContainer");
  const carouselTrack = document.createElement("ul");
  carouselTrack.classList.add("carouselTrack");
  container.appendChild(carouselTrack);

  const allBooks = []; // array that stores all bookcards
  let currentBookIndex = 0;

  featuredBooks.forEach((book) => {
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("carouselItem");
    carouselItem.appendChild(makeBookCards(book, buttonOption.ADD));
    carouselTrack.appendChild(carouselItem);
    allBooks.push(carouselItem);
  });

  // current slide indicator dots
  const indicators = document.createElement("div");
  indicators.classList.add("indicators");

  featuredBooks.forEach((_, index) => {
    const indicatorButton = document.createElement("button");
    indicatorButton.classList.add("indicatorButton");
    indicatorButton.dataset.index = index;
    indicators.appendChild(indicatorButton);
  });

  const indicatorButtons = indicators.querySelectorAll(".indicatorButton");
  indicatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.dataset.index);
      showBook(index, allBooks, button);
      currentBookIndex = index;
    });
  });

  showBook(0, allBooks, indicatorButtons[0]);

  // arrow functionality

  leftArrowButton.addEventListener("click", () => {
    currentBookIndex--;
    console.log(currentBookIndex);
    if (currentBookIndex < 0) {
      currentBookIndex = allBooks.length - 1;
    }
    showBook(currentBookIndex, allBooks, indicatorButtons[currentBookIndex]);
  });

  rightArrowButton.addEventListener("click", () => {
    currentBookIndex++;
    console.log(currentBookIndex);
    if (currentBookIndex > allBooks.length - 1) {
      currentBookIndex = 0;
    }
    showBook(currentBookIndex, allBooks, indicatorButtons[currentBookIndex]);
  });

  let autoScroll = setInterval(scroll, 5000);

  function scroll() {
    currentBookIndex++;
    if (currentBookIndex > allBooks.length - 1) {
      currentBookIndex = 0;
    }
    showBook(currentBookIndex, allBooks, indicatorButtons[currentBookIndex]);
  }

  function resetInterval() {
    clearInterval(autoScroll);
    autoScroll = setInterval(scroll, 5000);
  }

  carousel.appendChild(leftArrowButton);
  carousel.appendChild(container);
  carousel.appendChild(rightArrowButton);
  carousel.appendChild(indicators);

  return carousel;
}

function showBook(index, allBooks, button) {
  const bookCount = allBooks.length;
  if (index > -1 && index < bookCount) {
    const indicatorButtons = document.querySelectorAll(".indicatorButton");
    indicatorButtons.forEach((button) => {
      button.classList.remove("currentBook");
    });

    allBooks.forEach((book, i) => {
      if (index === i) {
        book.style.transform = "translateX(-200%)";
        button.classList.add("currentBook");
      } else {
        book.style.transform = "translateX(0%)";
      }
    });
  }
}
