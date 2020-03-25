var button = document.querySelector(".button--red");
var popup = document.querySelector(".modal__popup");
var parent = document.querySelector(".modal-parent");
var closer = document.querySelector(".modal__close");

console.log(parent, popup);

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    parent.classList.add("modal-show");
    popup.classList.add("modal-show");
});

closer.addEventListener("click", function(evt) {
	evt.preventDefault();
	parent.classList.remove("modal-show");
    popup.classList.remove("modal-show");
});