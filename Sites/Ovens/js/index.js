function toggleNav() {
    var mobileNav = document.getElementById("myTopnav");
    if (mobileNav.className === "topnavLinks") {
      mobileNav.className += " responsive";
    } else {
      mobileNav.className = "topnavLinks";
    }
  } 

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunc()};

// Get the navbar
var navbar = document.querySelector(".topnav");

// Get the offset position of the navbar
var stickyOffset = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunc() {
  if (window.pageYOffset > stickyOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let runBefore = false;

const carousel = document.querySelector(".is-draggable");
carousel.addEventListener("touchstart", endDragPrompt, false);

function endDragPrompt(){
  if(runBefore === false){
    const dragPromptCont = document.querySelector("#drag-prompt-container");
    const dragPrompt = document.querySelector(".drag-prompt");
    const dragPromptArr = document.querySelector(".drag-arrow");

    dragPrompt.style.opacity = 0;
    dragPromptArr.style.opacity = 0;
    
    setTimeout(() => {
      dragPromptCont.remove();
    }, 2000);
    runBefore = true;
  }
}