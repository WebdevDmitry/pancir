$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.header-links, .logo').addClass('scrolled');
    }
    else {
        $('nav').removeClass('black');
        $('.header-links, .logo').removeClass('scrolled');
    }
});

