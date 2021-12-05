// certificate slider
const swiper = new Swiper('.cert_swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
  
    // If we need pagination
    pagination: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.cert__next',
      prevEl: '.cert__prev',
    },

});

// deals slider
const dealSwiper = new Swiper('.deal_swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  
    // If we need pagination
    pagination: false,
  
    // Navigation arrows
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
	console.log(event)
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
		console.log(height, "after")
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

		// document.querySelectorAll(`.${className}`)?.forEach(item2 => {
		// 	if(item2 !== item) {
		// 		item.classList.remove(className);
		// 	}
		// })
		// item.classList.remove(className);
		// item.classList.add(className);
	})
});