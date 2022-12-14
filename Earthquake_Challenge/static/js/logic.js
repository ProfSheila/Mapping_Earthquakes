// Add console.log to check to see if our code is working.
console.log("working");
//Create the map object with center and zoom level.
// let map = L.map("mapid").setView([30, 30], 2);
// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.379],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088],
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow",
// }).addTo(map);
// An array containing each city's location, state, and population.
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//   console.log(city);
//   L.circleMarker(city.location, {
//     radius: city.population / 100000,
//   })
//     .bindPopup(
//       "<h2>" +
//         city.city +
//         ", " +
//         city.state +
//         "</h2> <hr> <h3>Population " +
//         city.population.toLocaleString() +
//         "</h3>"
//     )
//     .addTo(map);
// });

//Add tile layer
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  "Satellite Streets": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [[43.7, -79.3]],
  zoom: 11,
  layers: [satelliteStreets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'streets' tile layer to the map.
//streets.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData =
//   "https://raw.githubusercontent.com/ProfSheila/Mapping_Earthquakes/main/majorAirports.json";

//Accessing the Toronto airline routes GeoJSON URL.
// let torontoData =
//   "https://raw.githubusercontent.com/ProfSheila/Mapping_Earthquakes/main/torontoRoutes.json";

//Accessing Toronto Neighborhoods in GeoJson URL
let torontoHoods =
  "https://raw.githubusercontent.com/ProfSheila/Mapping_Earthquakes/main/torontoNeighborhoods.json";

//Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

//Add GeoJSON data.
let sanFranAirport = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: "3469",
        name: "San Francisco International Airport",
        city: "San Francisco",
        country: "United States",
        faa: "SFO",
        icao: "KSFO",
        alt: "13",
        "tz-offset": "-8",
        dst: "A",
        tz: "America/Los_Angeles",
      },
      geometry: {
        type: "Point",
        coordinates: [-122.375, 37.61899948120117],
      },
    },
  ],
};
// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function (data) {
//   console.log(data);

//Grabbing our GeoJson data
// d3.json(torontohoods).then(function(dta) {
//   console.log(data);
// })

// Accessing the Toronto neighborhoods GeoJSON URL.
