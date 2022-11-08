import { blackBusinesses } from "./config";
import {initMap} from "./map.js";
//responsible for building all of the results
// step 1 go out & get info from yelp
//Go to the internet and get the info 
function businessSearch(category, location) {
  const url = `https://www.apitutor.org/yelp/v3/businesses/search?location=${location}&term=${category} black owned`;
  //going out to get this data from address above
  //7-8 once it gets the response it pulls down the json data. Final .then is now down and it will show the user in a card essentially
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      //once data comes back use it to display a list & make a map using that data Loops through
     displayBusinessList(myJson);
     //display map here
     initMap(myJson);
    });
}

const displayBusinessList=(myJson)=>{
  console.log(myJson);
  //converting a list of json objects representing the businesses
  //and a list of html tags that we can display in our browser
  const sections = myJson.businesses.map((business) => {
    console.log(business.name, business.rating);
    return `
    <section class="result">
       <img src= "${business.image_url}"/>
       <div> 
            <h3>${business.name} </h3>
            <p>${business.display_phone}</p>
            <button>More</button>
        </div>
    </section>
   `;
  });
  document.querySelector(".list").innerHTML = sections.join("");
}
//this function is invoked on the location drop downs on the locations change event
//Requeries when someone changes the dropdown menu
function updateList() {
  const category = "carribean";
  //reaching into the DOM and getting whatever the location the user just selected
  const location = document.querySelector("#location").value;
  businessSearch(category, location);
}

//Make both functions available to other files
export { businessSearch, updateList };
