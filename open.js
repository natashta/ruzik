let form = document.querySelector("form");
let button = form.querySelector(".button--red");
let input = form.querySelector("input");
let popup = document.querySelector(".modal__popup");
let parent = document.querySelector(".modal-parent");
let closer = document.querySelector(".modal__close");

console.log(parent, popup);

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(input.value);
    parent.classList.add("modal-show");
    popup.classList.add("modal-show");

    provereno.check_code({ code: input.value.trim()}, function(result) {
        console.log(result.data);
    });
            return false;
});

closer.addEventListener("click", function(evt) {
	evt.preventDefault();
	parent.classList.remove("modal-show");
    popup.classList.remove("modal-show");
});