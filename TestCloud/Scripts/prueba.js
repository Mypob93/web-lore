$(document).ready(() =>
{
    //$(".body-content").css('padding-top', $('.header').outerHeight()); // pone el contenido por debajo del header
    setSubmit(); // setea el submit
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
                    nav: true,
                    loop: true,
                    center: true,
                    stagePadding: 50
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: true
                },               
                800: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });

    $(".owl-carousel.carousel-intro-left").owlCarousel( // instancia el carousel
        {
            items: 1,
            loop: false,
            nav: false,
            autoplay: false,
            center: false
        });
    $(".owl-carousel.carousel-intro-right").owlCarousel( // instancia el carousel
        {
            items: 1,
            loop: false,
            nav: false,
            autoplay: false,
            center: false
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

function sendEmail() {
    addLoader();
    let data = getContactData();
    $.ajax({
        type: "POST",
        url: "/Home/ContactMe",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $('#contactForm')[0].reset();
            removeLoader();
        },
        error: function (error) {
            console.log(error);
            removeLoader();
        }
    });
}

function getContactData() {
    return {
        Name: $("#nameContact").val(),
        Email: $("#emailContact").val(),
        Subject: $("#subjectContact").val(),
        Message: $("#messageContact").val()
    }
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