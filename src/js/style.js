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

var parent = document.querySelector('.main');
console.log(parent)
new BScroll(parent, {
    scrollbar: true
});