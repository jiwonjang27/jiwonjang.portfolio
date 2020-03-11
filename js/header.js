$(".fifth-row").slideUp(0, function(){})

$(".resume").click(function(){
    $(".fifth-row").slideToggle(500, function(){})
})

// top bar sticky
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

// top bar disappear reappear
var lastScrollTop = 0;

$(window).scroll(function () {

var st = $(this).scrollTop();
        if (st < lastScrollTop){
            $('.topbar').fadeIn();
        } else {
          $('.topbar').fadeOut();
        }
        lastScrollTop = st;
  })


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}