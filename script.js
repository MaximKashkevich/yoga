document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active') // Анимация бургер-иконки
	document.querySelector('.menu').classList.toggle('open') // Открытие/закрытие меню
})
