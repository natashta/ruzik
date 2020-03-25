var button = document.querySelector(".button--red");
var popup = document.querySelector(".modal__popup");
var parent = document.querySelector(".modal-parent");
var close = document.querySelector(".modal__close");

button.addEventListener("click", function(evt) {
    evt.preventDefault();
    parent.classList.add(".modal-show");
    popup.classList.add(".modal-show");
});

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	parent.classList.remove(".modal-show");
    popup.classList.remove(".modal-show");
});


let form = document.querySelector("form");
let input = form.querySelector(".wpcf7-text");
let button = form.querySelector("input[type=submit]");
let exSend = document.querySelector(".premium-modal-box-text-selector");

let popup = document.getElementById("premium-modal-508a46f");
let text = popup.querySelector(".premium-modal-box-modal-body");

exSend.removeAttribute("data-toggle");
exSend.removeAttribute("data-target");

button.setAttribute("data-toggle", "premium-modal");
button.setAttribute("data-target", "#premium-modal-508a46f");

form.addEventListener('submit', function(ev) {
	text.innerHTML = "<br><br><br><br>";
    provereno.check_code({ code: input.value.trim()}, function(result) {
		
		let i=JSON.parse(result.data);
			console.log(i);
			if (i.status==1) {
			console.log("Выигрыш: " + i.prize);
			text.innerHTML = "<p style='font-size: 20px; text-align: center; margin-top: 40px;'>Поздравляем! Вы выиграли! <br> Ваш выигрыш: "+i.prize+" <br> Для получения выигрыша обратитесь к организатору акции</p>";
	}	else if (i.status==2){
		console.log(i.prize);
		text.innerHTML = "<p style='font-size: 20px; text-align: center; margin-top: 40px;'>Сожалеем, код без выигрыша</p>";
	}
			else {console.log("Код не найден");
			text.innerHTML = "<p style='font-size: 20px; text-align: center; margin-top: 40px;'>Такой код не найден. <br>Проверьте правильность ввода</p>";}
});
        return false;
    });