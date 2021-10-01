let form = document.querySelector("form");
let button = form.querySelector(".button--red");
let input = form.querySelector("input");
let popup = document.querySelector(".modal__popup");
let parent = document.querySelector(".modal-parent");
let closer = document.querySelector(".modal__close");
let text = document.querySelector(".modal__content");
let submitForm = document.querySelector(".modal__form");
let formMessage = document.querySelector(".modal__success");
let formButton = document.querySelector(".modal__button");
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

button.addEventListener("click", function(evt) {
    evt.preventDefault();
	
if (submitForm.classList.contains("form-show")){
        submitForm.classList.remove("form-show");
     }
if (!formMessage.classList.contains("sticker__off")) {
        formMessage.classList.add("sticker__off")
    }
    parent.classList.add("modal-show");
    popup.classList.add("modal-show");
		text.innerHTML = "<br><br><br><br>";
	
   provereno.check_code({ code: input.value.trim()}, function(result) {
			let i=JSON.parse(result.data);
		 
		 	if (i.result !=='success') {
			 text.innerHTML = "<p style='font-size: 26px; text-align: center; line-height:1.5em; margin-top: 140px;'>Что-то пошло не так. <br> Попробуйте перезагрузить страницу.</p>";
			 return;
		 }
			console.log(i.data.status, i.data.message, i.data.prize);
		 	if (i.data.status==2) {
			text.innerHTML = "<p style='font-size: 26px; color: #f15a24; text-align: center; line-height:1.2em;'>Поздравляем! Вы выиграли! <br> Ваш выигрыш: "+i.data.prize+" <br> Для получения выигрыша обратитесь к организатору акции</p>";
			let t = i.data.token;
			submitForm.classList.add("form-show");
			submitForm.addEventListener("submit", submit.bind(null, t));
			
	} else if (i.data.status==3) {
			text.innerHTML = "<p style='font-size: 26px; color: #f15a24; text-align: center; line-height:1.5em; margin-top: 140px;'>"+i.data.message+" </p>";
	} else if (i.data.status==1) {
			text.innerHTML = "<p style='font-size: 26px; color: #f15a24; text-align: center; line-height:1.5em; margin-top: 140px;'>Сожалеем, код без выигрыша</p>";
	} else
		 text.innerHTML = "<p style='font-size: 26px; color: #f15a24; text-align: center; line-height:1.5em; margin-top: 140px;'>Такой код не найден. <br> Проверьте правильность ввода.</p>";
});
            return false;
});

closer.addEventListener("click", function(evt) {
	evt.preventDefault();
	parent.classList.remove("modal-show");
  	popup.classList.remove("modal-show");
});
			
function submit(t, evt) {
    		evt.preventDefault();
    		 if (formMessage.classList.contains("sticker__off")) {
                formMessage.classList.remove("sticker__off");
            }
            if (submitForm.classList.contains("form-show")){
                submitForm.classList.remove("form-show");
						}
    		let userdata = {fio:name.value, tel:phone.value, email:email.value};
				let res = JSON.stringify(userdata);
				
				provereno.post_user_data(
					{ 
						token: t,
						userdata: 	JSON.stringify(userdata)
					}, function(result) { console.log(result) } 
					);
		name.value = ""; 
		phone.value = "";
		email.value = "";
   }
