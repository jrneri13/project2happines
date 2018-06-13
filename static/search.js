//  //Load csv data using d3

//  d3.csv("../happiness_limi_data.csv", function(error,happinessdata)
//  {
//      if (error) return console.error(error);
//      console.log(happinessdata)
//      happinessdata.forEach(function(d) {
//         d.Score = +d.Score
//         d.GDP = +d.GDP;
//         d.Freedom = +d.Freedom
//         // console.log("GDP:" ,d.GDP);
//      });

//     // Creat SVG Element
//     var chart = d3.select("svg").append("g")



//  });

Plotly.d3.csv('../happiness_limi_data.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(rows, 'GDP'),y: unpack(rows, 'Freedom'), z: unpack(rows, 'Score'),
	mode: 'markers',
	marker: {
		size: unpack(rows, 'Score') * 50,
		line: {
		color: 'rgba(217, 217, 217)',
		width: 0.2},
		opacity: 0.8},
	type: 'scatter3d'
};


var data = [trace1];
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
  }};
Plotly.newPlot('3d-plot', data, layout);
});

// var bubbleDiv = document.getElementById("3d-plot");
 
// var traceA = {
//   type: "scatter3d",
//   mode: "markers",
//   x: [7.54,7.52,5.54,6.54],
//   y: [1.62,1.49, 1.43, 1.53],
//   z: [0.64,0.63,0.62,0.49],
//   marker: {
//     size: [100, 200, 800, 600, 500, 600],
//     sizemode: 'area'
//   }
// };
 
// var data = [traceA];
 
// var layout = {
//   title: "A Bubble Chart in Plotly"
// };
 
// Plotly.plot(bubbleDiv, data, layout);

