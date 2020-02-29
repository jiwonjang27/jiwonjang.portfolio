$(".row-a").click(function(){
    $(".sidebar").css("transform", "translate(100vw,0px)")
})

$(".icon-menu").click(function(){
    $(".sidebar").css("transform", "translate(50vw,0px)")
})

$(".row-e").slideUp(0, function(){})

$(".branding").click(function(){
    $(".row-e").slideToggle(500, function(){})
})

$(".row-g").slideUp(0, function(){})

$(".graphic").click(function(){
    $(".row-g").slideToggle(350, function(){})
})

$(".row-i").slideUp(0, function(){})

$(".editorial").click(function(){
    $(".row-i").slideToggle(300, function(){})
})

$(".row-k").slideUp(0, function(){})

$(".campaign").click(function(){
    $(".row-k").slideToggle(350, function(){})
})

$(".row-m").slideUp(0, function(){})

$(".video").click(function(){
    $(".row-m").slideToggle(300, function(){})
})