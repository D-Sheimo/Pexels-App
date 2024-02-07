


var allData = {};

$.ajax({
    type: "GET",
    url: "https://api.pexels.com/v1/search?query=landscape&orientation=landscape&size=large&per_page=25",
    
    headers: {
        Authorization: "Bearer mamou9nsYHgFsyG5WZXz1NzUakVsW7Qt54dx5fQlrDNTVKLXgFICj9nj",
    },
    success: function (data) {
        
        allData = data;

        function showRandomImage() {
            const searchContainer = $("#search-container");

            if (allData && allData.photos && allData.photos.length > 0) {
                const randomIndex = Math.floor(Math.random() * allData.photos.length);

                const randomImageHTML = `
                <div class="random-image-div">

                  
                     <div id="logo-cnt">
                      <a href="https://www.pexels.com">
                      <img id="logo" src="https://images.pexels.com/lib/api/pexels-white.png" />
                      </a>
                    </div>

                    <div id="explore-menu">
                     <a href="#" class="explore-link">Explore</a>
                      <div class="dropdown-content">
                         <a href="https://www.pexels.com/discover/">Discover Photos</a>
                         <a href="https://www.pexels.com/popular-searches/">Popular Searches</a>
                         <a href="https://www.pexels.com/leaderboard/">Leaderboard</a>
                     </div>
                    </div>
                    <div id="top-menu">
                     <p><a href="https://www.pexels.com/upload/" class="upload-link">Upload</a></p>
                    </div>
                   <div class="image-container">
                     <img class="random-image" src="${allData.photos[randomIndex].src.large}" alt="Random Image">

                     <h2 class="detail-banner">The best free stock photos, royalty-free images & videos shared by creators.</h2>
                     <h3 class="photographer">${allData.photos[randomIndex].photographer}</h3>
                   </div>
                   <div class="custom-form">
                   <div class="search-dropdown">
                       <a href="#" class="photo-link">Photos</a>
                       <div class="search-content">
                           <a href="https://www.pexels.com/" class="search-link">Photos</a>
                           <a href="https://www.pexels.com/videos/" class="search-link">Videos</a>
                           <input id="search-bar" placeholder="Search for free photos" type="text">
                       </div>
                   </div>
               </div>

                </div> `;

                searchContainer.html(randomImageHTML);
            } else {}
        }

        showRandomImage();
    },
});