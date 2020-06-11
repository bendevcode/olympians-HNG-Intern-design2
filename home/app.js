var navlinks=$(".collapse")
$(".bar").click(function (e) { 
    $(this).toggleClass("text-gray-600");
    navlinks.toggleClass("hidden");
});
var b1=$(".b1");
var b2=$(".b2");
b1.click(function(e){
    $(".dd1").toggleClass("show");
    $(".caret1").toggleClass("rotate")
});

b2.click(function(e){
    $(".dd2").toggleClass("show");
    $(".caret2").toggleClass("rotate")
});

$('.dd1').click(function(e){
    $(this).toggleClass("show");
})
$('.dd2').click(function(e){
    $(this).toggleClass("show");
})