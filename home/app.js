var navlinks=$(".collapse")
$(".bar").click(function (e) { 
    $(this).toggleClass("text-gray-600");
    navlinks.toggleClass("hidden");
});
var p1=$(".p1");
var p2=$(".p2");
p1.click(function(e){
    $(".dd1").toggleClass("show");
    $(".caret1").toggleClass("rotate")
});

p2.click(function(e){
    $(".dd2").toggleClass("show");
    $(".caret2").toggleClass("rotate")
});

$('.pp').click(function(e){
    $(".dd1").toggleClass("show");
    var a=$(this).text();
    $(".p1").html(a +"<i class=\"fa fa-angle-down ml-3 caret1\">")
})

$('.pp1').click(function(e){
    $(".dd2").toggleClass("show");
    var a=$(this).text();
    $(".p2").html(a +"<i class=\"fa fa-angle-down ml-3 caret2\">")
})