import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector('.gallery');

const creatgalleryItems = (galleryItems) => {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');
};
const galleryMarkup = ulEl.insertAdjacentHTML('beforeend', creatgalleryItems(galleryItems));

let gallery = new SimpleLightbox('.gallery a', { 
captionsData: 'alt', 
captionPosition:'bottom',
captionDelay: 250 });

