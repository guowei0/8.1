new Swiper('.banner', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    }
});
new Swiper('.cen_img', {
    direction: 'vertical',
    autoplay: {
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
new Swiper('.list');

new BScroll('.main', {
    scrollbar: true
});