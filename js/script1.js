var swiper = new Swiper('.swiper-container--first', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.swiper-container--second', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-container--hidden', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-container--hidden2', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});