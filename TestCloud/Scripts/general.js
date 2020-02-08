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

var siteIstotope = function () {
    /* activate jquery isotope */
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
}