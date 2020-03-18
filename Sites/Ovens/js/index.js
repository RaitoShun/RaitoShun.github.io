function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnavLinks") {
      x.className += " responsive";
    } else {
      x.className = "topnavLinks";
    }
  } 

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunc()};

// Get the navbar
var navbar = document.querySelector(".topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove("sticky");
  }
} 
