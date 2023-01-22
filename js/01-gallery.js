import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector(".gallery");

const creatgalleryItems = (galleryItems) => {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>`;
    }).join('');
};
const galleryMarkup = divEl.insertAdjacentHTML('beforeend', creatgalleryItems(galleryItems));


const onDivElClick = (event) => {
    event.preventDefault()
    const largeImage = event.target.dataset.source;

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${largeImage}">
`);
instance.show()
};

divEl.addEventListener('click', onDivElClick );

