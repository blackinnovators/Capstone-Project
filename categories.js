let resturantLink = document.querySelector("#restaurant-link");
let eventLink = document.querySelector("#event-link");
let coffeeShopLink = document.querySelector("#coffeeShop_link");
let healthBeautyLink = document.querySelector("#healthBeauty_link");
let nightLifeLink = document.querySelector("#nightLife_link");
let museumsLink = document.querySelector("#museums_link");

// document.querySelector("#location").addEventListener("change", updateList);

// eventsLink()


document.querySelector('#location').addEventListener('change', (e) => {
    console.log(e.target.value)
    let city = e.target.value;


    let newResturantLink=`http://127.0.0.1:5173/?city=${city}&category=restaurant`;
    resturantLink.href = newResturantLink;

    let newEventLink=`http://127.0.0.1:5173/?city=${city}&category=events`;
    eventLink.href = newEventLink;

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