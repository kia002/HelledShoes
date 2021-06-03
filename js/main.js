$(document).ready(function(){
	const mainSwiper = new Swiper('.slider', {
		// параметры слайдера
  		loop: true,// Слайдер будет бесконечно работать

  		// подключение пагинации
  		pagination: {
    		el: '.swiper-pagination',
    		type: 'bullets',
    		clickable: true,
 		},

 		// автопролистывание
  		autoplay: {
    		delay: 8000,
			disableOnInteraction: false,
		},
	});

	const slider_propoisal = new Swiper('.slider-proposal', {
		// параметры слайдера
  		loop: true,// Слайдер будет бесконечно работать
      spaceBetween: 79, // расстояние между слайдами


		// подключеник стрелок
 		navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
  		},

    // автопролистывание
      autoplay: {
        delay: 15000,
        disableOnInteraction: false,
      },

      slidesPerView: 3, // Количество видимых слайдов

      slidesPerGroup: 3, // Количество пролистываемых слайдов


  });
});