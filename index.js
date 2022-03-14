var mybutton = document.getElementById("btnscrollTotop");

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {myFunction()};

var navba = document.getElementById("navib");
var sticky = navba.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navba.classList.add("sticky")
  } else {
    navba.classList.remove("sticky");
  }
}

const sign_in_btn = document.querySelector
('#sign-in-button');
const sign_up_btn = document.querySelector
('#sign-up-button');
const register = document.querySelector('.register');

sign_up_btn.addEventListener('click', ()=>{
  register.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', ()=>{
  register.classList.remove('sign-up-mode');
});
