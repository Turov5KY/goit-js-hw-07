import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

addGalleryImage(galleryItems);

function addGalleryImage(images) {
  return images.map(evt => {
    galleryEl.insertAdjacentHTML(
      'beforeend',
      `
    <a class="gallery__item" href="${evt.original}">
      <img class="gallery__image" src="${evt.preview}" title="${evt.description}" alt="${evt.description}" />
    </a>
    `
    );
  });
}

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
