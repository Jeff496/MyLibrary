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
  const rightArrowbutton = document.createElement("button");
  rightArrowbutton.classList.add("rightArrowButton");
  rightArrowbutton.innerHTML = `<img src="${rightArrow}" alt="Left Arrow Button">`;

  // main display area
  const container = document.createElement("div");
  container.classList.add("carouselTrackContainer");
  const carouselTrack = document.createElement("ul");
  carouselTrack.classList.add("carouselTrack");
  container.appendChild(carouselTrack);

  featuredBooks.forEach((book) => {
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("carouselItem");
    carouselItem.appendChild(makeBookCards(book, buttonOption.ADD));
    carouselTrack.appendChild(carouselItem);
  });

  // current slide indicator dots
  const indicators = document.createElement("div");
  indicators.classList.add("indicators");

  for (let i = 0; i < featuredBooks.length; i++) {
    const indicatorButton = document.createElement("button");
    indicatorButton.classList.add("indicatorButton");
    indicators.appendChild(indicatorButton);
  }

  carousel.appendChild(leftArrowButton);
  carousel.appendChild(container);
  carousel.appendChild(rightArrowbutton);
  carousel.appendChild(indicators);

  return carousel;
}
