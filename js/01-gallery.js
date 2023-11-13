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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

listGallery.innerHTML = renderGallery(galleryItems);
listGallery.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }

  evt.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        listGallery.addEventListener("keydown", onEscBtnPress);
      },
      onClose: () => {
        listGallery.removeEventListener("keydown", onEscBtnPress);
      },
    }
  );
  instance.show();

  function onEscBtnPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
