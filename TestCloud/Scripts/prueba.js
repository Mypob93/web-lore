$(document).ready(() =>
{
    handleLoader();
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
                    center: true,
                    stagePadding: 50
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

    AOS.init();

    $(window).scroll(function () {

        var st = $(this).scrollTop();

        if (st > 100) {
            $('.navbar-lore').addClass('shrink');
        } else {
            $('.navbar-lore').removeClass('shrink');
        }

    })
})

function setSubmit(){
	$("#submit").click(e => {
		e.preventDefault();
		
		if (contactIsValid()){
            sendEmail();
		}
	})
}

function addLoader() {
    $('body').append('<div style="" id="loadingDiv"><div class="spinner"></div></div>');
    let brWindow = $(window).height();
    let scTop = $(window).scrollTop();
    $("#loadingDiv").css('height', brWindow);
    $("#loadingDiv").css('top', scTop + "px");
    $('body').addClass('stop-scrolling')
}

function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv").remove(); //makes page more lightweight 
        $('body').removeClass('stop-scrolling');
    });
}

function contactIsValid(){
	return $("#contactForm")[0].reportValidity();
}

function clickMenu(section) {
    window.location = section;
    if ($(".navbar-toggler").css('display') != 'none') {
        $(".navbar-toggler").trigger('click');
    }
}

function handleLoader() {
    $("#overlayer").delay(1000).fadeOut("slow");
}