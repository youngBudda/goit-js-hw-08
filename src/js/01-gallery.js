// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(SimpleLightbox);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>`
    )
    .join('');
}

ulGallery.innerHTML = createGallery(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
