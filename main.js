$('.hamburger a').click(function(){
    $('.side').addClass('side-toggle');
})
$('.close a').click(function(){
    $('.side').removeClass('side-toggle');
})

$(window).resize(function(e){
    e.preventDefault();
})

$('.cv').click(function(){
    $('.sub-menus').slideToggle();
    console.log('I am clicked');
})


