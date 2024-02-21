$(function () {
  let allData = {};
  const randomContainer = $("#random-container");
  const container = $("#photo");

  $(document).on("submit", "#search-bar-cnt", function (e) {
    e.preventDefault();

  

    const textValue = $(".search-bar").val();

    $.ajax({
      type: "GET",
      url: `https://api.unsplash.com/search/photos?query=${textValue}&page=1&per_page=15&order_by=latest&client_id=WS734FXGs1FG2NsvXFpUdL46_F0e3zS9I9b_Vndn7Eo`,
      data: {
        per_page: 12,
      },
      headers: {
        Authorization: "Client-ID WS734FXGs1FG2NsvXFpUdL46_F0e3zS9I9b_Vndn7Eo",
      },
      success: function (data) {
        
        const searchData = data.results;
        container.empty();
        
        const resultsContainer = $("<div>").attr("id", "photo-list");

        searchData.forEach(function (photo) {
          const overlayContainer = $("<div>").addClass("overlay-container");
          const imageUrl = photo.urls.regular;
          const photographerName = photo.user.name;
          
              
          overlayContainer.html(`
           <div class="overlay">
          <img class="photo-list-img" src="${imageUrl}">
          <h4 class="search-name">${photographerName}</h4>
          </div>
        `);
      
        
      
        resultsContainer.append(overlayContainer);
      });
      
        
        container.empty().append(resultsContainer);
      },
    });
  });
  


  function topData() {
    $.ajax({
      type: "GET",
      url: "https://api.unsplash.com/photos",
      data: {
        per_page: 12,
      },
      headers: {
        Authorization: "Client-ID WS734FXGs1FG2NsvXFpUdL46_F0e3zS9I9b_Vndn7Eo",
      },
      success: function (data) {
        allData = data;
        RandomImageTop();
      },
    });
  }

  function RandomImageTop() {
    if (allData && allData.length > 0) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      const randomImageHTML = `
       <div class="container">
              <div class="random-image-div">

              <div class="menu-bar">
              <img class="logo" src="https://unsplash-assets.imgix.net/marketing/press-logotype-stacked.svg?auto=format&fit=crop&
          q=60" alt="Placeholder Image">
              <div class="links">
                  <div>
                      <a href="https://www.pexels.com/discover/" class="menu-links explore">Explore<span class="arrow-icon">&#9662;</
          span></a>
                      <div class="dropdown-container">
                            <a href="https://www.pexels.com/discover/">Discover Photos</a>
                            <a href="https://www.pexels.com/popular-searches/">Popular Searches</a>
                            <a href="https://www.pexels.com/leaderboard/">Leaderboard</a>
                            <a href="https://www.pexels.com/challenges/">Challenges</a>
                            <a href="https://www.pexels.com/videos/">Free Videos</a>
                            <a href="https://www.pexels.com/blog/">Pexels Blog</a>
                      </div>
                  </div>
                  <a href="https://www.pexels.com/license/" class="menu-links">License</a>
                  <a href="https://www.pexels.com/upload/" class="menu-links bell">&#x1F514</a>
                  <img class="profile" src="https://w7.pngwing.com/pngs/465/229/png-transparent-unsplash-round-logo-tech-companies-thumbnail.png" alt="Placeholder Image">
                  <a href="https://www.pexels.com/upload/" target="_blank" class="upload-cnt">Upload</a>
              </div>
               </div>
                <img class="random-image" src="${allData[randomIndex].urls.regular}" alt="Random Image">
                <h3 class="photographer">${allData[randomIndex].user.name}</h3>
              </div>
              <div class="center-container">
                <div class="header-text-cnt">
                 <h2 class="header-text">The best free stock photos, royalty free image & videos shared by creators</h2>
                </div>

                <form id="search-bar-cnt">
                <input class="search-bar" placeholder="Search for free photos" type="text">
                <a href="https://unsplash.com/" target="_blank" class="icon-link"></a>
            </form>
                

                <div class="header-text-cnt">
                <h4 class="trend-text">valentine,hug,snow,meeting,valentines</h4>
               </div>
              </div>
            </div>

            <div class="photo-container">
             <div>
              <a href="http://127.0.0.1:5500/Pexels-App/" class="photo-cnt-link active">Home</a>
              <a href="https://www.pexels.com/videos/" class="photo-cnt-link">Videos</a>
              <a href="https://www.pexels.com/leaderboard/" class="photo-cnt-link">Leaderboard</a>
              <a href="https://www.pexels.com/challenges/" class="photo-cnt-link">Challenges</a>
             </div>
          </div>

            <div class="trending">
              <h5 class="stock-photos">Free Stock Photos</h5>
       </div>
     `;

      randomContainer.html(randomImageHTML);
    }
  }

  topData();
});
