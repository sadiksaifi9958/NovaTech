let burgerButton = document.getElementById("burger-btn");
let navMenu = document.getElementById("nav-menu");

burgerButton.addEventListener("click", function(){
    navMenu.classList.toggle("open");
});

let cards = document.querySelectorAll(".price-card");
let cardButton = document.querySelectorAll(".card-button");

cards.forEach(function(card){    
    card.addEventListener("click", function(){
        cards.forEach(function(c){
        c.classList.remove("selected-card");
    })
    card.classList.add("selected-card");
    })
});
cardButton.forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.stopPropagation();
    });
});

