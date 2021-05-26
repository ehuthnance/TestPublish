window.onscroll = function() {myFunction()};

var header = document.getElementById("stickyHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("h1");
  } else {
    header.classList.remove("h1");
  }
}