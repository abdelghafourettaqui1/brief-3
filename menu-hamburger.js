
var hamburger_button = document.querySelector('.nav');

hamburger_button.addEventListener('click' , display_menu);

function display_menu() {

    document.querySelector(".respo").classList.toggle("show");
}