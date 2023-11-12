import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listGallery = document.querySelector(".gallery");

function renderGallery(items) {
  return items
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

listGallery.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
