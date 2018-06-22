function init(){
  getOptions();
}

init();

//Get the option from index.html

function getOptions(){
  var selDataset = document.getElementById('selDataset');
  getData(selDataset[0], buildCharts)

}

function getData(optionValue,callback){

  Plotly.d3.json('/country/scores', function (error, happinessData) {
    if (error) return console.warn(error);
    //console.log(happinessData)
    callback(optionValue,happinessData,happinessData);
  });  
}

function optionChanged(newOption){
  getData(newOption, buildCharts);
}

function buildCharts(value,chartdata){

    
    country = []
    scorelist = []
    family = []
    gdplist = []
    freedom = []
    lifeexpectancy =[]
    generosity = []
    trust = []

    for (i=0;i < chartdata.length; i++){
      scorelist.push(chartdata[i]['happiness_score'])
      family.push(chartdata[i]['Family'])
      freedom.push(chartdata[i]['freedom'])
      gdplist.push(chartdata[i]['GDP'])
      lifeexpectancy.push(chartdata[i]['life_expectancy'])
      generosity.push(chartdata[i]['generosity'])
      trust.push(chartdata[i]['trust'])
      country.push(chartdata[i]['country'])
      
    }
    //console.log(family)
    switch (value){
      
      case 'GDPvsFreedom':
      
      var trace = {
        x: gdplist,
        y: freedom, 
        z: scorelist,
        mode: 'markers',
        
        marker: {
          color:scorelist,
          size: scorelist * 60,
          line: {
          color: scorelist,
          width: 0.2},
          opacity: 0.8},
        type: 'scatter3d'
      };
    
      var data = [trace];
    
      var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0},
        width: 800,
        height: 640,
        paper_bgcolor: '#F5DEB3',
        dragmode: 'select',
        selectdirection : "h",
        scene: {
          xaxis:{title: 'Money',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          yaxis:{title: 'Freedom',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          zaxis:{title: 'Score',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          camera: {
            center: {x: 0, y: 0, z: 0}, 
            eye: {x:2.5, y:0.1, z:0.1}, 
            up: {x: 0, y: 0, z: 1}}
        },
        
      // annotations:[{text: 'Happiness Data', textangle: 10}]
      };


      break;
    
      case 'FamilyvsHealth':

      var trace = {
        x: family,
        y: lifeexpectancy, 
        z: scorelist,
        mode: 'markers',
        marker: {
          color:scorelist,
          size: scorelist * 50,
          line: {
          color: scorelist,
          width: 0.2},
          opacity: 0.8},
        type: 'scatter3d'
      };
    
      var data = [trace];
    
      var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0},
        width: 800,
        height: 640,
        paper_bgcolor: '#F5DEB3',
        dragmode: 'select',
        selectdirection : "h",
        scene: {
          xaxis:{title: 'Family',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          yaxis:{title: 'Health',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          zaxis:{title: 'Score',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          camera: {
            center: {x: 0, y: 0, z: 0}, 
            eye: {x:2.5, y:0.1, z:0.1}, 
            up: {x: 0, y: 0, z: 1}}
                  
        }
      };

      break;

      case 'TurstvsGenerostiy':
          
      var trace = {
        x: trust,
        y: generosity, 
        z: scorelist,
        mode: 'markers',
        marker: {
          color:scorelist,
          size: scorelist * 50,
          line: {
          color: scorelist,
          width: 0.2},
          opacity: 0.8},
          colorbar:{
            autotick: false,
            tick0: 0,
            dtick: 1
          },
          type: 'scatter3d',
          //scene: "scene"
      };
    
      var data = [trace];
    
      var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0},
        width: 800,
        height: 640,
        paper_bgcolor: '#F5DEB3',
        dragmode: 'select',
        selectdirection : "h",
        scene: {
          xaxis:{title: 'Trust',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          yaxis:{title: 'Generosity',
          backgroundcolor: 'black', 
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          zaxis:{title: 'Score',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          camera: {
            center: {x: 0, y: 0, z: 0}, 
            eye: {x:2.5, y:0.1, z:0.1}, 
            up: {x: 0, y: 0, z: 1}}
        }
        
      };

      break;

      
      case 'MoneyvsHealth':
          
      var trace = {
        x: gdplist,
        y: lifeexpectancy, 
        z: scorelist,
        mode: 'markers',
        marker: {
          color:scorelist,
          size: scorelist * 50,
          line: {
          color: scorelist,
          width: 0.2},
          opacity: 0.8},
          colorbar:{
            autotick: false,
            tick0: 0,
            dtick: 1
          },
          type: 'scatter3d',
          //scene: "scene"
      };
    
      var data = [trace];
    
      var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0},
        width: 800,
        height: 640,
        paper_bgcolor: '#F5DEB3',
        dragmode: 'select',
        selectdirection : "h",
        scene: {
          xaxis:{title: 'Money',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          yaxis:{title: 'Health',
          backgroundcolor: 'black', 
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          zaxis:{title: 'Score',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          camera: {
            center: {x: 0, y: 0, z: 0}, 
            eye: {x:2.5, y:0.1, z:0.1}, 
            up: {x: 0, y: 0, z: 1}}
        }
        
      };

      break;

      default:
      var trace = {
        x: [],
        y: [], 
        z: [],
        mode: 'markers',
        // marker: {
        //   color:scorelist,
        //   size: scorelist * 50,
        //   line: {
        //   color: scorelist,
        //   width: 0.2},
        //   opacity: 0.8},
        //   colorbar:{
        //     autotick: false,
        //     tick0: 0,
        //     dtick: 1
        //   },
          type: 'scatter3d',
          //scene: "scene"
      };
    
      var data = [trace];
    
      var layout = {
        margin: {l: 0,r: 0,b: 0,t: 0},
        width: 800,
        height: 640,
        paper_bgcolor: '#F5DEB3',
        dragmode: 'select',
        selectdirection : "h",
        scene: {
          xaxis:{title: 'Factor 1',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          yaxis:{title: 'Factor 2',
          backgroundcolor: 'black', 
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          zaxis:{title: 'Score',
          backgroundcolor: 'black',
          gridcolor: "rgb(256, 256, 256)",
          showbackground: true,
          zerolinecolor: "rgb(255, 255, 255)"},
          camera: {
            center: {x: 0, y: 0, z: 0}, 
            eye: {x:2.5, y:0.1, z:0.1}, 
            up: {x: 0, y: 0, z: 1}}
        }
        
      };
    
    }
  
   

  Plotly.newPlot('3d-plot', data, layout); 
  
  
  // Build PIE chart 

  
  var piedata = [{

        values: scorelist.slice(0,10),
        labels: country.slice(0,10),
        // hovertext: labels.slice(0, 10),
        // hoverinfo: 'hovertext',
        type: 'pie'
      }];

      var pielayout = { height:640, width:800 };
  
  Plotly.newPlot('pie-plot', piedata, pielayout);
  
 
}


function sortBy(inputData, columnName, direction) {
  // column name is the column by which we want to sort data
  // direction can be ASC or DESC, any value that is not DESC is automally ASC
  var sortedData = [];//initializing our variable
  
  // Defining the sorting logic below
  sortedData = inputData.sort(function(firstObject, secondObject) {
    if(direction === 'DESC') {
      return secondObject[columnName] - firstObject[columnName];
    } else {
      return firstObject[columnName] - secondObject[columnName];
    }
  });
  return sortedData;// returning the sortedData
}

// var gd = document.getElementById('3d-plot');


// var cnt = 0;

// function run() {
//   rotate('scene', Math.PI / 180);
//   // rotate('scene2', -Math.PI / 180);
//   requestAnimationFrame(run);
// } 
// run();

// function rotate(id, angle) {
//   var eye0 = gd.layout[id].camera.eye
//   var rtz = xyz2rtz(eye0);
//   rtz.t += angle;
  
//   var eye1 = rtz2xyz(rtz);
//   Plotly.relayout(gd, id + '.camera.eye', eye1)
// }

// function xyz2rtz(xyz) {
//   return {
//     r: Math.sqrt(xyz.x * xyz.x + xyz.y * xyz.y),
//     t: Math.atan2(xyz.y, xyz.x),
//     z: xyz.z
//   };
// }

// function rtz2xyz(rtz) {
//   return {
//     x: rtz.r * Math.cos(rtz.t),
//     y: rtz.r * Math.sin(rtz.t),
//     z: rtz.z
//   };
// }
