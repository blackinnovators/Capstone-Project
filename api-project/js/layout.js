//this components job is to intialize the layout
import "../results.css";
//injects the entire html layout into the DOM
const initLayout = () => {
  document.querySelector("#app").innerHTML = `
        <main class="container">
        <h1><header>
      
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#photos">Photos</a>
            <a href="#contact">Contact</a>
         
          </div>
        </header></h1>

      <div class="searchForm">
        <label for="browse">Select a City:</label>
        <div class="select" style="width:200px;">
        <select name="video type" id="location" required>
            <option value="Phoenix, Az">Phoenix, Az</option>
            <option value="Tampa, FL">Tampa, FL</option>
            <option value="Chicago, IL">Chicago, IL</option>
            <option value="Charlotte, NC">Charlotte, NC</option>
        </select>
        </div> 
        </div>

        <section class="list">list of businesses will go here</section>
        <section class="map" id="my_map">
            
           
                    
        </section>
        </main>
        `;
       
};

//Making the function available to the other files
export { initLayout };
