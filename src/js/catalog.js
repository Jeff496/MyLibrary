export default function makeCatalog() {
    const catalog = document.createElement('div');

    const headline = document.createElement('h1');
    headline.textContent = 'This is the Catalog';
    headline.classList.add('headline');

    catalog.appendChild(headline);


    return catalog;
}