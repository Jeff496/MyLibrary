export default function makeHome() {
  const home = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to the Library";
  headline.classList.add("headline");

  home.appendChild(headline);

  return home;
}
