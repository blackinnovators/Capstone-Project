// import './style.css'
import {initLayout} from "./layout.js";
import { businessSearch, updateList } from "./business-search.js";

//here is where business search gets called/envoked


 initLayout() 
document.querySelector("#location").addEventListener("change", updateList);
businessSearch("ritas", "phoenix, az");

 
