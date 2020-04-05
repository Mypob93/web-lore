$(document).ready(() => {
    // carga los idiomas
    $('.selectpicker').selectpicker();

    checkLangCookie();

    $("select").on("changed.bs.select",
        function (e, clickedIndex, newValue, oldValue) {
            let value = $('.selectpicker').val();
            setCookie("lang-web", value);
            location.reload();
        });

    // carga AOS
    AOS.init();

    // desactivar loader
    handleLoader();

    $("#collapsibleNavbar ul li a").click(event, element => {
        event.preventDefault();

        let redirect = $(event.target).data('redirect');
        clickMenu(redirect);
    })
})

function setSubmit() {
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
    if ($(".navbar-toggler").css('display') != 'none') {
        $(".navbar-toggler").trigger('click');
    }

    if (document.location.pathname.startsWith('/Home/Portfolio')) {
        if (section !== "/Home/Portfolio") {
            let t = "http://" + window.location.host + '/' + section;
            window.location = t;
        }
    }
    else {
        let t = "http://" + window.location.host + section;
        window.location = t;
    }
}

function handleLoader() {
    $("#overlayer").delay(1000).fadeOut("slow");
}

var siteIstotope = function () {
    var $container = $('#posts').isotope({
        itemSelector: '.item',
        isFitWidth: true
    });

    $container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on('click', 'button', function (e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        $('#filters button').removeClass('active');
        $(this).addClass('active');
    });

    //$("#filters .all").trigger('click');
}

var checkLangCookie = function () {
    let lCookie = getCookie("lang-web");

    if (lCookie != undefined) {
        $('.selectpicker').selectpicker('val', lCookie)
    }
}