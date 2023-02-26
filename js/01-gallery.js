import { galleryItems } from "./gallery-items.js";
// Change code below this line

const newGallery = document.querySelector(".gallery");
console.log(newGallery);

const addGallery = galleryItems
	.map(
		(el) => `<div class='gallery__item'>
<a class='gallery__link' href=${el.original}>
    <img
        class='gallery__image'
        src=${el.preview}
        data-source=${el.original}
        alt=${el.description}
    />
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
	const instance = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`,
		{
			onShow: () => {
				document.addEventListener("keydown", closeWhenEscape);
			},
			onClose: () => {
				document.removeEventListener("keydown", closeWhenEscape);
			},
		}
	);

	instance.show();

	function closeWhenEscape(event) {
		if (event.code !== "Escape") {
			return;
		}
		instance.close();
	}
}

/* console.log(galleryItems); */
