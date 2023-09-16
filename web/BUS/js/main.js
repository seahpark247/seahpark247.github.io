/* NAV */
var didScroll;

$(window).scroll(function () {
    didScroll = true;
});

setInterval(function () {
    var st = $(this).scrollTop();
    
    if (didScroll) {
        $('nav').css({'display':'block'});
        didScroll = false;
    }

    if(didScroll == st){
        $('nav').css({'display':'none'});
    }
}, 250);