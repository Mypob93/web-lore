$(document).ready(() =>
{
    $(".owl-carousel.carousel-portfolio").owlCarousel( // instancia el carousel
        {
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                320: {
                    items: 1,
                    nav: false,
                    loop: true,
                    center: true
                },
                600: {
                    items: 2,
                    nav: false,
                    loop: true
                },               
                800: {
                    items: 4,
                    nav: false,
                    loop: true
                }
            }
        });

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if (st > 80) {
            $('.navbar-lore').addClass('shrink');
        } else {
            $('.navbar-lore').removeClass('shrink');
        }

    })
})