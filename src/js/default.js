//
var wow = new WOW(
    {
        mobile:false
    }
);
wow.init();

//
$('.gallery--banner').owlCarousel({
    autoplay:true,
    dots:true,
    items:1,
    loop:true,
    nav:false,
    smartSpeed:1100
});
$('.gallery--test').owlCarousel({
    autoplay:true,
    dots:false,
    items:1,
    loop:true,
    nav:true,
    smartSpeed:1100
});

//
$('.nav--bar').on('click',function(){
    if ($(this).hasClass('is--open')){
        $(this).removeClass('is--open');
        $('.nav--bar--drop').removeClass('is--open');
        $('.overlay').removeClass('is--open');
    }else{
        $(this).addClass('is--open');
        $('.nav--bar--drop').addClass('is--open');
        $('.overlay').addClass('is--open');
    }
});