//
var body = $('body');
var nav_bar = $('.nav--bar');
var nav_bar_drop = $('.nav--bar-drop');
var overlay = $('.overlay');

nav_bar.on('click',function(){
    if ($(this).hasClass('is--open')){
        $(this).removeClass('is--open');
        nav_bar_drop.removeClass('is--open');
        overlay.removeClass('is--open');
        body.removeClass('drop--is-open');
    }else{
        $(this).addClass('is--open');
        nav_bar_drop.addClass('is--open');
        overlay.addClass('is--open');
        body.addClass('drop--is-open');
    }
});
//
var has_drop = $('.nav--menu-drop .has--drop>a');
has_drop.on('click',function(){
    $(this).parent().toggleClass("is--open");    
});