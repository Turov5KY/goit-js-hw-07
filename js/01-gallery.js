import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClickedGallery);

addGalleryImage(galleryItems);

function addGalleryImage(images) {
  return images.map(evt => {
    galleryEl.insertAdjacentHTML(
      'beforeend',
      `
    <div class="gallery__item">
        <a class="gallery__link" href="${evt.original}">
            <img
            class="gallery__image"
            src="${evt.preview}"
            data-source="${evt.original}"
            alt="${evt.description}"
            />
        </a>
    </div>
    `
    );
  });
}

function onClickedGallery(evt) {
  evt.preventDefault();
  const isClickImage = evt.target.classList.contains('gallery__image');
  if (!isClickImage) {
    return;
  }

  const originalImageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImageUrl}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      instance.close();
    }
  });
}
