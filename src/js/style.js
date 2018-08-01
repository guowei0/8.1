new Swiper('.banner', {
    loop: true,
    autoplay: true
});
new Swiper('.cen_img', {
    direction: 'vertical',
    autoplay: true,
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