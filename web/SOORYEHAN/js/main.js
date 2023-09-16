//Click default
$('.move,.con3 .box,.notice li,.row2_menu li,.close,.eng_bk,.eng_wt').on('click', function() {
    event.preventDefault();
});

//HEADER
var a = 0;
$(window).on('scroll', function() {
    var scr = $(window).scrollTop();
    a++;
    console.log(a);

    if (scr >= 100) {
        $('.h_in').addClass('on');
        $('.logo_bk').stop().fadeIn();
        $('.logo_bk,.logo_wt').css({
            'top': '-18px'
        });
        $('.logo_wt').stop().fadeOut();
    } else {
        $('.h_in').removeClass('on');
        $('.logo_wt').stop().fadeIn();
        $('.logo_wt,logo_bk').css({
            'top': '0'
        });
        $('.logo_bk').hide();
    }

});

//POPUP
$('.eng').on('click', function() {

    $('.popup').show();
});
$('.close').on('click', function() {

    $('.popup').hide();
});

$(window).resize(function() {
    if (window.innerWidth < 1000) {
        $('.util').children('li').hide();

    } else {
        $('.util').children('li').show();
    }
    if (window.innerWidth < 850) {
        $('.eng').hide();
    } else {
        $('.eng').show();
    }

});

//con2 HEART EFFECTS
$('.empty').on('click', function() {
    $(this).siblings().fadeIn();
    return false;
});
$('.full').on('click', function() {
    $(this).fadeOut();
    return false;
});

//con4 SLIDE
$('.prev, .next').on('click', function() {
    event.preventDefault();
});
$('.slide_wrap').slick({
    asNavFor: '.slide_sub',
    nextArrow: '.next',
    prevArrow: '.prev',
    autoplay: true,
    autoplaySpeed: 2000
});
$('.slide_sub').slick({
    asNavFor: '.slide_wrap',
    nextArrow: '.next',
    prevArrow: '.prev',
    autoplay: true,
    autoplaySpeed: 2000
});

//position fixed UPPER EFFECT
$('.p3').on('click', function() {
    $('html,body').animate({
        'scrollTop': 0
    }, 1000);
});

//position fixed SHOW
var video_offset = $('.video').offset().top,
    con1_offset = $('.con1').offset().top;

$(window).on('scroll', function() {
    var scr = $(window).scrollTop();

    if (scr >= (video_offset) && scr < (con1_offset - 650)) {
        $('.fixed').fadeOut();
    } else {
        $('.fixed').fadeIn();
    }
});