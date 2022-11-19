//this components job is to intialize the layout
import "../results.css";
//injects the entire html layout into the DOM
const initLayout = () => {
  document.querySelector("#app").innerHTML = `
        <main class="container">
            <!--<h1><header>
      
                <div class="topnav">
                    <a class="active" href="#home">Home</a>
                    <a href="#photos">Photos</a>
                    <a href="#contact">Contact</a>
                
                  </div>
             </header></h1>-->

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

                  <label for="browse">Category:</label>
                  <div class="select" style="width:200px;">
                          <select name="video type" id="location" required>
                              <option value="All">All</option>
                              <option value="Restaurants">Restaurants</option>
                              <option value="Events">Events</option>
                              <option value="Coffee Shops">Coffee Shops</option>
                              <option value="Health & Beatuy">Health & Beatuy</option>
                              <option value="Nightlife">Nightlife</option>
                              <option value="Museum">Museum</option>
                          </select>
                  </div> 
              </div>

  

              <section class="list">list of businesses will go here</section>
              <section class="map" id="my_map"></section>
       

              <footer id="colophon" class="site-footer" role=""contentinfo">
 
              <div class="social-wrapper">
                  <ul>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-twitter"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-instagram"></i> 
                          </a> 
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-linkedin"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-facebook"></i>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                          <i class="fa-brands fa-tiktok"></i>
                          </a>
                      </li>
                  </ul>
              </div> 
              <nav class="footer-nav" role="navigation">
                  <p>
                      Copyright &copy; 2022 Black Innovators. All rights reserved.
                  </p>
              </nav>
          </footer>
</main>
        `;
};

//Making the function available to the other files
export { initLayout };
