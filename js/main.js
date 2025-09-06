const menuBtn = document.querySelector('.header__menu-btn');
const menuList = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});