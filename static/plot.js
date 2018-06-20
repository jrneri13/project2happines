getData();

function getData(){

  Plotly.d3.json('/geoData', function (error, maphappinessData) {
    if (error) return console.warn(error);
    //console.log(maphappinessData)
    buildmapcharts(maphappinessData)
    
});

}

function buildmapcharts(mapdata){
  //console.log(mapdata)
};

var minBulletSize = 3;
var maxBulletSize = 70;
var min = Infinity;
var max = -Infinity;
for (var i = 0; i < mapData.length; i++) {
  var value = mapData[i].rank;
  if (value < min ) {
    min = value;
  }
  if (value > max ) {
    max = value;
  }
}

// it's better to use circle square to show difference between values, not a radius
var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

// create circle for each country
var images = [];
for (var i = 0; i < mapData.length; i++) {
  var dataItem = mapData[i];
  var value = dataItem.rank;
  // calculate size of a bubble
  var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
  if (square < minSquare) {
    square = minSquare;
  }
  var size = Math.sqrt(square / (Math.PI * 2));
  var id = dataItem.countryCode;

  images.push( {
    "type": "circle",
    "theme": "light",

    "width": size,
    "height": size,
    "color": dataItem.color,
    "longitude": mapData[id].longitude,
    "latitude": mapData[id].latitude,
    "title": dataItem.country,
    "rank": rank
  } );
}

// build map
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "eckert6",
  "titles": [ {
    "text": "World Happiness in 2017",
    "size": 14
  }, {
    "text": "source: Kaggle",
    "size": 11
  } ],
  "areasSettings": {
    //"unlistedAreasColor": "#000000",
    //"unlistedAreasAlpha": 0.1
  },
  "dataProvider": {
    "map": "worldLow",
    "images": images
  },
  "export": {
    "enabled": true
  }
} );