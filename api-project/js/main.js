// import './style.css'
//using all the other files and initializing them
import {initLayout} from "./layout.js";
import { businessSearch, updateList } from "./business-search.js";

//here is where business search gets called/envoked

//intitializes the layout
 initLayout() 
 //everytime dropdown menu is changed invokes the update list function
document.querySelector("#location").addEventListener("change", updateList);
document.querySelector("#category").addEventListener("change", updateList);
//kicks off the search so that it display whatever buisnesses in the city
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.city; // "some_value"
  console.log(params.city)
  console.log(params.category)
//   const $select = document.querySelector('#mySelect');
//   $select.value = 'steve'
document.querySelector("#location").value=params.city;
//what is being held in this is all of the categories
const categoriesoptions = document.querySelectorAll("#category option")
if(params.category == "restaurant"){
    categoriesoptions[1].selected="selected";
}
if(params.category == "events"){
    categoriesoptions[2].selected="selected";
}
if(params.category == "coffeeShop"){
    categoriesoptions[3].selected="selected";
}
if(params.category == "healthBeauty"){
    categoriesoptions[4].selected="selected";
}
if(params.category == "nightlife"){
    categoriesoptions[5].selected="selected";
}
if(params.category == "museums"){
    categoriesoptions[6].selected="selected";
}

const city = document.querySelector("#location").value;
const category = document.querySelector("#category").value;
businessSearch(category, city);

{/* <select name="video type" id="category" required>
<option value="">All</option>
<option value="caribbean,bbq,soulfood,seafood">Restaurants</option>
<option value="unofficialyelpevents,yelpevents,musicvenues">Events</option>
<option value="coffeeshops,coffee">Coffee Shops</option>
<option value="healthtrainers,beautysvc">Health & Beatuy</option>
<option value="nightlife">Nightlife</option>
<option value="museums">Museum</option>
</select> */}
 
