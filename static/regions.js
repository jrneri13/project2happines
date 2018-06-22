var url = "/addMapData";

getData();

function getData(){

  Plotly.d3.json('/addMapData', function (error, regionmaphappinessData) {
    if (error) return console.warn(error);
    console.log(regionmaphappinessData)
    buildmapcharts(regionmaphappinessData)
    
});

}

function buildmapcharts(mapdata){
  //console.log(mapdata)
};

//var url = 

var total = {};
for (var i = 0; i < continentData.length; i++) {
    var continent = continentData[i].continent
    if(!total[continent]) {
      total[continent] = {}
      total[continent].totalCount = 0
      total[continent].totalRank = 0
    }
    total[continent].totalRank += continentData[i].rank;
    total[continent].totalCount += 1
}

/**
 * {
 *  "EU": {
 *    count: 20,
 *    rank: 2043
 *  }
 * }
 */
/**
 * 
 * { 
 *   "EU": 2043 / 20
 * 
 * }
 */
var continentAverageRank = {}
Object.keys(total).forEach(function(continent) {
  continentAverageRank[continent] = total[continent].totalRank / total[continent].totalCount
})

console.log('END RESULT = ', continentAverageRank)

//var avg = total / continentData.length;

//build the map

var trace1 = {
  continentAverageRank,
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart"
};

Plotly.newPlot("plot", data, layout);