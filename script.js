let burgerButton = document.getElementById("burger-btn");
let navMenu = document.getElementById("nav-menu");

burgerButton.addEventlistener("click", function(){
    navMenu.classList.toggle("open")
});