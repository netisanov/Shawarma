let mainMenu = document.querySelector('.menu__list');
let mainHamburger = document.querySelector('.hamburger');
let button1 = document.querySelector('.price__button1');
let button2 = document.querySelector('.price__button2');
let button3 = document.querySelector('.price__button3');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.form__close')


mainHamburger.addEventListener('click', () => {
	mainMenu.classList.toggle('menu__list--active');
	mainHamburger.classList.toggle('hamburger--active');
})



let menuLinks = document.querySelectorAll('.menu__link');

for (let menuLink of menuLinks) {
	menuLink.addEventListener('click', (e) => {
		e.preventDefault();
		let scrollToElem = menuLink.getAttribute('href');
		let coordinates = document.querySelector(scrollToElem).offsetTop;
		window.scrollTo({
			top: coordinates - 100,
			behavior: 'smooth'
		})
		mainMenu.classList.toggle('menu__list--active');
		mainHamburger.classList.toggle('hamburger--active');
	})
}

$('.guests__list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
  	{
	  	breakpoint: 768,
	  	settings: {
	  		slidesToShow: 3,
	  		slidesToScroll: 1,
	  		infinite: true,
	  	}
  	},
  	{
	  	breakpoint: 320,
	  	settings: {
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		infinite: true,
	  	}
  	}
  ]
});

button1.addEventListener('click', () => {
	modal.classList.add('modal--active');
	let label = document.getElementById('label');
	label.value = 'Классическая'
})
button2.addEventListener('click', () => {
	modal.classList.add('modal--active');
	let label = document.getElementById('label');
	label.value = 'Фирменная'
})
button3.addEventListener('click', () => {
	modal.classList.add('modal--active');
	let label = document.getElementById('label');
	label.value = 'Мексиканская'
})
modal.addEventListener('click', (e) => {
	if (e.target == modal) {
		modal.classList.remove('modal--active');
	}
})
closeModal.addEventListener('click', () => {
	modal.classList.remove('modal--active');
})