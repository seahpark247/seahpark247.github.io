//MAIN INTRO
setTimeout(function () {
    $('.intro_box').remove();
}, 1000)

//POPUP
$('.main_in>div').on('click', function () {
    var i = $(this).index();
    $('.popup').children('div').eq(i).fadeIn();
});

$('.main_second .box3').on('click', function () {
    $('.pop3').fadeIn();
});

$('.main_second .box4').on('click', function () {
    $('.pop4').fadeIn();
});

$('.close').on('click', function () {
    $(this).parent().hide();
});

//슬라이더 돌리기

$('.gallery').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000
});