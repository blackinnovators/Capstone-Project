// import './style.css'
//using all the other files and initializing them
import {initLayout} from "./layout.js";
import { businessSearch, updateList } from "./business-search.js";

//here is where business search gets called/envoked

//intitializes the layout
 initLayout() 
 //everytime dropdown menu is changed invokes the update list function
document.querySelector("#location").addEventListener("change", updateList);
//kicks off the search so that it display whatever buisnesses in the city
businessSearch("ritas", "phoenix, az");

 
