$('.hamburger a').click(function(){
    $('.side').toggleClass('side-toggle');
})
$('.close a').click(function(){
    $('.side').toggleClass('side-toggle');
})

$(window).resize(function(e){
    e.preventDefault();
})

$('.cv').click(function(){
    $('.sub-menus').slideToggle();
    console.log('I am clicked');
})