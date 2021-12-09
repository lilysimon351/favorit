// certificate slider
const swiper = new Swiper('.cert_swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: false,

    navigation: {
      nextEl: '.cert__next',
      prevEl: '.cert__prev',
    },

});

// deals slider
const dealSwiper = new Swiper('.deal_swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: false,

    navigation: {
      nextEl: '.deal__next',
      prevEl: '.deal__prev',
    },

});

// show more
const showReviwes = document.querySelector('.show-reviews'),
	showCases = document.querySelector('.show-cases'),
	reviewsBox = document.querySelector('.review-box'),
	casesBox = document.querySelector('.table-wr'),
	reviewsHeight = reviewsBox.offsetHeight,
	casesHeight = casesBox.offsetHeight	;
	
showReviwes.addEventListener('click', (event) => {
	expand(event.target, reviewsBox, reviewsHeight, 'Скрыть отзывы', 'Все отзывы')
});
showCases.addEventListener('click', (event) => {
	expand(event.target, casesBox, casesHeight, 'Скрыть', 'Показать больше')
});
function expand(button, elem, height, changedText, defaultText) {
	const  className = 'animated-height';
	if(!elem.classList.contains(className)) {
		elem.classList.add(className)
		elem.style.height   = elem.scrollHeight + 'px'
		button.innerText = changedText
	} else {
		elem.classList.remove(className)
		elem.style.height   = height + 'px'
		button.innerText = defaultText
	}
}

// tabs
document.querySelectorAll('.tab')?.forEach( (item, i) => { 
	item.addEventListener('mouseenter', () => {
		document.querySelector('.tab_active')?.classList.remove('tab_active');
		item.classList.add('tab_active');
		document.querySelector('.tab__item_active').classList.remove('tab__item_active');
		document.querySelectorAll('.tab__item')[i].classList.add('tab__item_active');
	})
});

// menu
document.querySelectorAll('.menu-item_has_children')?.forEach( (item, i) => { 
	item.addEventListener('click', () => {
		let className = 'menu-item_clicked'
		if(document.querySelector(`.${className}`) === item) {
			item.classList.remove(className)
		} else {
			document.querySelector(`.${className}`)?.classList.remove(className);
			item.classList.add(className);
		}
	})
});

// burger menu
document.querySelector('.menu-burger')?.addEventListener('click', () => {
	closeOpenMenu()
})

document.querySelector(".nav_expanded")?.addEventListener("click",  (event) => {
	if(event.target === this && event.target !== document.querySelector('.menu')) {
		// closeOpenMenu();
	}
});

// close/open menu
function closeOpenMenu() {
	let className = 'nav_expanded',
		nav = document.querySelector('.nav');
	if(nav.classList.contains(className)) {
		nav.classList.remove(className)
	} else {
		nav.classList.add(className)
	}
}

// modal

let modal = document.querySelector('.modal'),
	iframe = modal.querySelector('.modal__iframe'),
	className = 'modal_opened';	

// open modal
document.querySelectorAll('.play')?.forEach( (item, i) => { 
	item.addEventListener('click', (event) => {
		event.preventDefault();
		let ytLink = item.getAttribute('data-yt-link');
		iframe.setAttribute('src', ytLink);
		modal.classList.add(className);
	})
});

// close modal
modal?.addEventListener('click', (event) => {
	event.preventDefault();
	event.stopPropagation();
	modal.classList.remove(className);
	setTimeout(() =>  iframe.setAttribute('src', ""), 370 )
})

// stop propagation on iframe click
iframe?.addEventListener('click', (event) => {
	event.stopPropagation();
})