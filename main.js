
// (function () {
//   var xhr = new XMLHttpRequest();
//   var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
//   console.log(xhr,'xhr')
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         var giphyObj = JSON.parse(xhr.responseText);
//         // console.log(xhr.responseText,'giphyObj');
//         var gifDrop = document.querySelector(".gif");
//         var link = giphyObj.data[0].images.original_still.url;
//         gifDrop.src = link;
//       }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// })();



//Making ourFetch
// function ourFetch(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         callback(xhr.responseText)
//       }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

//   var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// ourFetch(url, function(data) {
//     var gifDrop = document.querySelector(".gif");
//     var parsedData = JSON.parse(data)
//   var link = parsedData.data[0].images.original_still.url;
//   gifDrop.src = link;
// })



// Calling ourFetch
// (function() {
//   ourFetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC", (data)=> {
//         var giphyObj = JSON.parse(data);
//         var gifDrop = document.querySelector(".gif");
//         var link = giphyObj.data[1].images.downsized_medium.url;
//         gifDrop.src = link;
//   })
// })();

// Using fetch API
(function() {
  fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
  .then(response => response.json())
  .then(parcedResponse=>{
    console.log(parcedResponse)
    // const gifDrop = document.querySelector(".gif");
    // const title = document.querySelector(".title");
    // const link = parcedResponse.data[2].images.downsized_medium.url;
    // title.innerHTML = parcedResponse.data[2].title;
    // gifDrop.src = link;
    const container = document.querySelector(".container");

    for(var i=0; i<10; i++) {
      image1 = document.createElement("img");
      container.appendChild(image1);
      image1.src=parcedResponse.data[i].images.downsized_medium.url;
    }
  })
  .catch(e=>console.log(e,'errrrorr'))
})();
