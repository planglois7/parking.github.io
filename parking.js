var map = L.map("mapid",{scrollWheelZoom:false}).setView([44.0454, -123.0726], 16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myFeatureGroup = L.featureGroup().addTo(map).on("click", groupClick);
var marker, test;
var array = [[44.04185,-123.074695],
	[44.044764, -123.079412],
	[44.043308, -123.070708],
	[44.045509, -123.069421],
	[44.043994, -123.073991],
	[44.041519, -123.079785],
	[44.046986, -123.073474],
	[44.045711, -123.068079],
	[44.046305, -123.079425],
	[44.048982, -123.069168]
	];

var names = ["University St",
	"Lot 16A",
	"15th Ave",
	"13th Ave",
	"Lot 29A",
	"Lot 17",
	"Lot 12A",
	"Lot 15",
	"Lot 42",
	"Lot 56"];

for (var i = 0; i < 10; i += 1) {
  test = "test " + i;
  marker = L.marker(array[i]).addTo(myFeatureGroup).bindPopup(names[i]).openPopup();
  marker.test = i;
}

function groupClick(event) {
  var div_id = event.layer.test;
  for (var i=0; i < 10; i+= 1) {
  	document.getElementById(i).style.display = "none";
  }
  var the_div = document.getElementById(div_id);
  the_div.style.display = "block";
}
