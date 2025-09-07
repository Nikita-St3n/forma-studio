const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

const swiper = new Swiper('.projects__slider', {
    loop: true,
    spaceBetween: 20,
    
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },

    navigation: {
        nextEl: '.projects__arrow-next',
        prevEl: '.projects__arrow-prev',
    }
});