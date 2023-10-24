const orderSwiper = document.querySelector('.swiper-colors'),
      btnCopy = document.querySelector('.change-top__subtitle .icon')
      btnHeaderMenu = document.querySelector('.header-toggle')
if(orderSwiper) {

    const swiper = new Swiper('.swiper-colors', {
        loop: true,
        autoHeight: true,
        slidesOffsetBefore: 550,
        slidesPerView: 1.5,
        initialSlide: 1,
        breakpoints: {
            // when window width is >= 320px
            320: {
            },
            // when window width is >= 480px
            576: {
            },
        // when window width is >= 640px
        768: {
        },
        // 992: {
            //     slidesOffsetBefore: 700,
            //     spaceBetween: 200
            // }
        }
    });
}
if(btnCopy) {
    const copyText = (e) => {
        const parent = e.target.closest('.change-top__subtitle')
        const copyText = parent.innerText.replace(/\s+/g, ' ').trim()
        navigator.clipboard.writeText(copyText)
        .then(() => alert('kopiert'))
        .catch(err => console.error('Error:', err));
    }
    btnCopy.addEventListener('click', copyText)
}
if (btnHeaderMenu) {
    btnHeaderMenu.addEventListener('click', () => {
        const parent = btnHeaderMenu.closest('.header')
        parent.classList.toggle('header--active')
    })
}