//Pegar o tamanho da tela.
const TELA_HTML = document.documentElement.clientWidth;

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(currentScrollPos == 0){
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0";
  }
  else if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  if(TELA_HTML <= 650){
    document.getElementById("side-menu").style.width = "100vw";
    document.getElementById("header").style.top = "-70px";  
  }else{
    document.getElementById("side-menu").style.width = "50vw";
    document.getElementById("header").style.top = "-70px";
  }
  document.getElementById("menu-header").style.visibility = "visible";
  document.getElementById("menu-options").style.visibility = "visible";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("menu-header").style.visibility = "hidden";
  document.getElementById("menu-options").style.visibility = "hidden";
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("header").style.top = "0";

}


