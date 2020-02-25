$(".fifth-row").slideUp(0, function(){})

$(".resume").click(function(){
    $(".fifth-row").slideToggle(500, function(){})
})

$(document).ready(function(){
    $(window).scroll(function(){
        var topBar = $(".topbar-before").offset()
        var docScrollY = $(document).scrollTop()
        var barThis = $(".topbar")
        if( docScrollY > topBar.top ) {
            barThis.addClass("topbar-active");
        } else {
            barThis.removeClass("topbar-active");
        }
    });
});