//Click default
$('.main_bn,.con_wrap div,.fmenu1 li,.fmenu2 li').on('click',function(){
    event.preventDefault();   
});

var onOff = true;

function mobile(){
    
    $('nav').hide();
    
    onOff = true;
    $('.pc_search_box').hide();
    $('.all_btn').click(function(){
        $('nav').css({'display':'block'});         
        $('nav').stop().animate({'left':0});       
    });
    
    $('.close').click(function(){
       $('nav').stop().animate({'left' :'-100%'});
    });
    
    
}//mobile func.


function pc(){
    
    $('nav').show();
    
    $('nav').css({'left' : 0});
    $(document).on('click','.pc_search',function(){
        onOff = !onOff;
        if(onOff == false){
$('.pc_search_box').stop().slideDown();}else{
    $('.pc_search_box').stop().slideUp();
}        
    });

    
}//pc func.


var winWidth = $(window).width();
if(winWidth < 1024){
    mobile();
}else if(winWidth >= 1024){
    pc();
}

$(window).resize(function(){

var winWidth = $(window).width();
if(winWidth < 1024){
    mobile();
}else if(winWidth >= 1024){
    pc();
}
    
    
});


function deft(){}