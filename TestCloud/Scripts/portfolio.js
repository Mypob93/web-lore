$(document).ready(() =>
{
    handleLoader();

    AOS.init();

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if (st > 80) {
            $('.navbar-lore').addClass('shrink');
        } else {
            $('.navbar-lore').removeClass('shrink');
        }

    });

    setFancyBox();
    //setFancyBox2();
})

$(window).load(() => {
    siteIstotope();
})

var setFancyBox = function () {
    $(".fancybox").fancybox({
        openEffect: 'elastic',   //'fade', 'elastic'
        closeEffect: 'elastic',
        openSpeed: 'normal', //ms, slow, normal, fast (default 250ms)
        closeSpeed: 'normal',
        helpers: {
            title: {
                type: 'inside' //'float', 'inside', 'outside' or 'over'
            },
            overlay: {
                closeClick: true  // if true, se cierra al hacer click fuera de la imagen
            }
        },
        padding: 11
    });
}