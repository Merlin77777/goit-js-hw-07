import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

function marckup(arr) {
  const htmltext = arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
    </li> `
    )
    .join('');
  return htmltext;
}

container.insertAdjacentHTML('beforeend', marckup(galleryItems));

container.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) return;

  const modalWindow = basicLightbox.create(
    `
	<img src="${evt.target.dataset.source}" alt="">
`,
    {
      onShow: () => {
        document.addEventListener('keydown', pressEsc);
      },
      onClose: () => {
        document.removeEventListener('keydown', pressEsc);
      },
    }
  );

  function pressEsc(evt) {
    if (evt.key === 'Escape') modalWindow.close();
  }

  modalWindow.show();
}
