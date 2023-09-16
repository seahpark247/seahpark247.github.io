//Click default
$('.button li,.bar_in li,.back span,.box_wrap ul li,.review_tab li,.review div ul li,.quick,.f1 ul li,.f_menu li,.quick_pop li').on('click', function() {
    event.preventDefault();
});

//POPUP BUTTONS
$('.down').on('click', function() {
    $('.popup').stop().addClass('on');
});
$('.up').on('click', function() {
    $('.popup').stop().removeClass('on');
});

//POPUP .box EFFECTS
$('.popup .box').on('mouseover', function() {
    $(this).stop().addClass('on');
}).on('mouseout', function() {
    $(this).stop().removeClass('on');
    $('.plus').stop().addClass('off');
});

//.gnb MENU
$('.gnb li').on('mouseover', function() {
    $(this).children('.sub').stop().slideDown();
}).on('mouseout', function() {
    $(this).children('.sub').stop().slideUp();
})

//SLIDE
$('.slide_wrap').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
});

//MAIN .bar
$('.bar_in li').mouseover(function() {
    $(this).addClass('on');
}).mouseout(function() {
    $(this).removeClass('on');
});

//.row1 TAB
$('.button li').on('click', function() {
    $(this).addClass('on').siblings().removeClass('on');

    var i = $(this).index();
    $('.box_wrap').children('ul').eq(i).show().siblings().hide();
});

//.row2 TAB
$('.review_tab li').on('click', function() {
    $(this).addClass('on').siblings().removeClass('on');

    var i = $(this).index();
    $('.review_wrap').children('div').eq(i).show().siblings().hide();
})

//.box_wrap ul li
$('.box_wrap ul li').on('mouseover', function() {
    $(this).find('.txt').stop().animate({
        'bottom': '-40px'
    }, 500);
});
$('.box_wrap ul li').on('mouseout', function() {
    $('.box_wrap .txt').stop().animate({
        'bottom': 0
    }, 650);
});

//FOOTER quick menu
//.quick_top
$('.quick_top a').on('click', function() {
    $('html,body').animate({
        'scrollTop': 0
    }, 1000);
});

//.quick_wrap
var main_offset = $('.main').offset().top;

$(window).on('scroll', function() {
    var scr = $(window).scrollTop();

    if (scr < (main_offset)) {

        $('.quick_wrap').removeClass('on');
    } else {

        $('.quick_wrap').addClass('on');
    }
});

//.quick
$('.quick').on('click', function() {
    $('.quick_wrap').removeClass('on');
});

//.row3 MAP
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(35.2147733, 129.077505),
    level: 4
};

var map = new kakao.maps.Map(container, options);

//.row3 MAP MARKER
var markerPosition = new kakao.maps.LatLng(35.2147733, 129.077505);

//.row3 MAP MARKER SHOW
var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

//MARKER default code
//marker.setMap(null);