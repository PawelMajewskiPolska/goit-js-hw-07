import { galleryItems } from "./gallery-items.js";
// Change code below this line
const newGallery = document.querySelector(".gallery");
console.log(newGallery);

const addGallery = galleryItems
	.map(
		(el) => `<div class='gallery__item'>
        <a class="gallery__item" href=${el.original}>
        <img class="gallery__image" src=${el.preview} alt=${el.description} />
      </a>
</div>`
	)
	.join("");

newGallery.insertAdjacentHTML("beforeend", addGallery);

newGallery.addEventListener("click", showBigImage);

function showBigImage(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const lightbox = new SimpleLightbox(".gallery a", {
		caption: true,
		captionPosition: "bottom",
		captionsData: "alt",
		captionDelay: 250,
	});
}
