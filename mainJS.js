var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
    },
  });

//1)Изменяю содержимое файла локальной копии

//2)Изменяю содержимое файла локальной копии 2 раз

//3) Изменяю содержимое файла локальной копии 3 раз


//4) Изменяю содержимое файла локальной копии для другой ветки
//5) Изменяю содержимое файла локальной копии для другой ветки 2

//6) Изменяю содержимое файла локальной копии для другой ветки 3