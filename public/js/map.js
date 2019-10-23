var latitude;
var longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storePosition);
  } else {
    throw new Error("Geolocation not supported");
  }
}

function storePosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(latitude, longitude);
  generateMap(latitude, longitude);
}

function generateMap(latitude, longitude) {
  var map = L.map("map", {
    center: [latitude, longitude],
    zoom: 13
  });
  console.log(map);
  L.tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1IjoicmFjZS1icmlnZ3MiLCJhIjoiY2syM2ZwZzR4MGFvbzNibzZ0d2EzeGFqMCJ9.tDmVdqF63gerMhykEpUfjg"
    }
  ).addTo(map);

  getPopups(map);
}

function getAllEntries() {
  return $.ajax({
    url: "/api/posts",
    type: "GET"
  });
}

function getPopups(map) {
  getAllEntries().then(function(data){
    data.forEach(function(post){
      var latlng = L.latLng(post.latitude, post.longitude);
      L.popup()
        .setLatLng(latlng)
        .setContent(`<h6>${post.animal_name}</h6><img src="${post.img}" class="popup-image">`)
        .openOn(map)
    })
  })
}

getLocation();

console.log(latitude);
console.log(longitude);

module.exports = {
  latitude: latitude,
  longitude: longitude
};
