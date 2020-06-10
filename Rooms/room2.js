var navlinks=$(".collapse")
$(".bar").click(function (e) { 
    $(this).toggleClass("text-gray-600");
    navlinks.toggleClass("hidden");
});