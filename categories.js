let resturantLink = document.querySelector("#restaurant-link");
let eventLink = document.querySelector("#event-link");
let coffeeShopLink = document.querySelector("#coffeShop-link");
let healthBeautyLink = document.querySelector("#healthBeauty-link");
let nightLifeLink = document.querySelector("#nightlife-link");
let museumsLink = document.querySelector("#museums-link");

// document.querySelector("#location").addEventListener("change", updateList);

// eventsLink()


document.querySelector('#location').addEventListener('change', (e) => {
    console.log(e.target.value)
    let city = e.target.value;


    let newResturantLink=`http://127.0.0.1:5173/?city=${city}&category=restaurant`;
    resturantLink.href = newResturantLink;

    let newEventLink=`http://127.0.0.1:5173/?city=${city}&category=events`;
    eventLink.href = newEventLink;

    let newCoffeeShopLink=`http://127.0.0.1:5173/?city=${city}&category=coffeeShop`;
    coffeeShopLink.href = newCoffeeShopLink;

    let newHealthBeautyLink=`http://127.0.0.1:5173/?city=${city}&category=healthBeauty`;
    healthBeautyLink.href = newHealthBeautyLink;

    let newnightLifeLink=`http://127.0.0.1:5173/?city=${city}&category=nightlife`;
    nightlifeLink.href = newnightLifeLink;

    let newMuseumsLink=`http://127.0.0.1:5173/?city=${city}&category=museums`;
    museumsLink.href = newMuseumsLink;
;})  

// document.getElementById("resturants_link");
// document.getElementById("events_link");
// document.getElementById("coffeeShops_link");
// document.getElementById("health&beauty_link");
// document.getElementById("nightlife_link");
// document.getElementById("museums_link");


//     $('#event_link').href = '/results.html?city' + e.target.value + '&category=event';
// })

// $('#location').addEventListener('chage', (e) => {
//     document.querySelector('#event_link').href = '/results.html?city' + e.target.value + '&category=event';
// })