$(document).ready(() =>
{
    handleLoader();
    siteIstotope();

    AOS.init();

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if (st > 80) {
            $('.navbar-lore').addClass('shrink');
        } else {
            $('.navbar-lore').removeClass('shrink');
        }

    })
})