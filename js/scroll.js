// Menu-toggle button

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav > ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.menu > ul > li > a').addClass('white')
        $('.menu > ul > a ').removeClass('hidden')
    } else {
        $('nav').removeClass('black');
        $('.menu > ul > li > a').removeClass('white')
        $('.menu > ul > a ').addClass('hidden')
    }
})