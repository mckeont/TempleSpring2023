var map = L.map('map', {
  center: [39.983219999796114, -75.15356557830536],
  zoom: 16,
});

var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
