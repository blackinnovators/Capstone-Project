let resturantLink = document.querySelector("#restaurant-link");
let eventLink = document.querySelector("#event-link");
let coffeeShopLink = document.querySelector("#coffeShop-link");
let healthBeautyLink = document.querySelector("#healthBeauty-link");
let nightLifeLink = document.querySelector("#nightlife-link");
let museumsLink = document.querySelector("#museums-link");


// Go to the DOM and 
document.querySelector('#location').addEventListener('change', (e) => {
    console.log(e.target.value)
    let city = e.target.value;

    setCategoryLinks(city);
    
}); 

// Created new function to loop through all the cities
function setCategoryLinks(city) {

    let newResturantLink=`http://127.0.0.1:5173/?city=${city}&category=restaurant`;
    resturantLink.href = newResturantLink;

    let newEventLink=`http://127.0.0.1:5173/?city=${city}&category=events`;
    eventLink.href = newEventLink;

    let newCoffeeShopLink=`http://127.0.0.1:5173/?city=${city}&category=coffeeShop`;
    coffeeShopLink.href = newCoffeeShopLink;

    let newHealthBeautyLink=`http://127.0.0.1:5173/?city=${city}&category=healthBeauty`;
    healthBeautyLink.href = newHealthBeautyLink;

    let newnightLifeLink=`http://127.0.0.1:5173/?city=${city}&category=nightlife`;
    nightLifeLink.href = newnightLifeLink;

    let newMuseumsLink=`http://127.0.0.1:5173/?city=${city}&category=museums`;
    museumsLink.href = newMuseumsLink;

}

// When the page first loads go find the location select menu 
// whatever is currently selected set all links to that location
setCategoryLinks(document.querySelector("#location").value);


