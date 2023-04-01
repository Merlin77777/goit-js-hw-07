import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

function marckup(arr) {
  const htmltext = arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
    </li> `
    )
    .join('');
  return htmltext;
}

container.insertAdjacentHTML('beforeend', marckup(galleryItems));

let modalWindow = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
