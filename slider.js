var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 6,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 7,
        },
        1200: {
            slidesPerView: 9,
        },
        1440: {
            slidesPerView: 11,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 120,
    freeMode: true,
    pagination: {
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});