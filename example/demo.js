/* global L */



// Set up map
var map = L.map('map', {
  // defaultExtentControl: true,
  center: [47.24, -122.45],
  zoom: 10
});

// Another way to add to map
L.control.defaultExtent().addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/saschu/ckp4g6sjf1jwt18r0ffjwxamf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrZ3poNGVkYjA1b3Ayd3JzOHczb29iNjEifQ.MqXTIcUhZl4C-s0Jk5o49A', {
  maxZoom: 18,
  id: 'examples.map-i86knfo3'
}).addTo(map);
