// import './style.css'
import './results.css';
import {businessSearch, updateList} from './business-search';
//here is where business search gets called/envoked
// businessSearch("pizza", "tampa, fl")
businessSearch("flavas", "tampa, fl")
document.querySelector('#app').innerHTML = `
<main class="container">
<h1>search results</h1>

 <div> <h1>
  <label for="browse">Select a City:</label>

  <select name="video type" id="location" required>
    <option value="Phoenix, Az">Phoenix, Az</option>
    <option value="Tampa, FL">Tampa, FL</option>
    <option value="Chicago, IL">Chicago, IL</option>
    <option value="Charlotte, NC">Charlotte, NC</option>
  </select>

  <!-- <label for="touch"><span>Look For Your State</span></label>               
  <input type="checkbox" id="touch"> 

  <ul class="slide">
    <li><a href="#">Phoenix, Az</a></li> 
    <li><a href="#">Tampa, FL</a></li>
    <li><a href="#">Chicago, IL</a></li>
    <li><a href="#">Charlotte, NC</a></li>
  </ul> -->
</h1>


</div> 
<section class="list">list of businesses will go here</section>
<section class="map">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.055218653253!2d-112.05508868411532!3d33.44786788077467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b123986ec86df%3A0x5ca64e0db05c9ed0!2sBlack%20Theatre%20Troupe%20Inc!5e0!3m2!1sen!2sus!4v1666636257509!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             
  </section>
</main>
`
document.querySelector("#location").addEventListener("change", updateList);



