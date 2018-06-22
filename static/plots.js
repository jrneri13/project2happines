// Defining the main function, which will call the getData function
function init(){
  getData();}
  
  //---------------------------------------------------------------------------------------------
  
  // Defining the getData function which will call our flask API routes from App.py python flask routes program code
  function getData(){
    Plotly.d3.json('/country/scores', function (error, happydatabar) { //happydatabar is the main array string for all our array data from country/scores route
      if (error) return console.warn(error);
      buildbarcharts(happydatabar); // call buildbardcharts function where the bar charts will be plotted
    });  
  }
  
  
  //------------------------------------------------------------------------------------------------------------
  
  // Defining a new function for sorting all the values in asecending and descending order 
  // for each of the 6 elements - 1) Overall Happiness, 2)Health 3)Family 4)Freedom 5)Economy 6)Trust
  function sortBy(inputData, columnName, direction) {
    // column name is the column by which we want to sort data
    // direction can be ASC or DESC, any value that is not DESC is automally ASC
    var sortedData = [];//initializing our variable
    // Defining the sorting logic below
    sortedData = inputData.sort(function(firstObject, secondObject) {
      if(direction === 'ASC') {
        return firstObject[columnName] - secondObject[columnName];
      } else {
        return secondObject[columnName] - firstObject[columnName];
      }
    });
    return sortedData;// returning the sortedData 
  }
  
  
  //------------------------------------------------------------------------------------------------------------
  
  
  // Define buildbarcharts function which will build the default chart when the page first loads
  function buildbarcharts(data){
    
    // Now Defining all our variables which will contain the sorted data elements
    // 1)Happiness/Sadness, 2)Health 3)Family 4)Freedom 5)Economy 6)Trust
    var sortedByHappiness = [];
    var sortedByHealth = [];
    var sortedByFamily = [];
    var sortedByFreedom =[];
    var sortedByEconomy = [];
    var sortedByTrust = [];
    
    // Now Defining all our variables which will contain top 10 and bottom 10 countries for each of the 6 categories below
    // 1)Happiness and Sadness, 2)Health 3)Family 4)Freedom 5)Economy 6)Trust 
    var happiness_list = [];
    var sadness_list = [];
    var top_health_list = [];
    var bottom_health_list = [];
    var top_family_list = [];
    var bottom_family_list = [];
    var top_freedom_list = [];
    var bottom_freedom_list = [];
    var top_economy_list = [];
    var bottom_economy_list = [];
    var top_trust_list = [];
    var bottom_trust_list = [];
    
    // Displaying original data - unsorted data from the input SQLite database - countries are ranked by happiness
    // console.table(data);
    
    sortedByHappiness = sortBy(data, 'happiness_score', 'DESC');
    // console.log("Happiness Data")
    // console.table(sortedByHappiness);      
    for (i=0;i < 10; i++){
      happiness_list.push(sortedByHappiness[i]['country']); // loading top 10 countries based on happiness rank
    }
    global_happiness_list = happiness_list;
    
    for (i=sortedByHappiness.length-1;i >= sortedByHappiness.length-10; i--){   // loading bottom 10 countries based on happiness rank
      sadness_list.push(data[i]['country']);
    }
    global_sadness_list = sadness_list;

    //------------------------------------------------------------------------------------ 
    sortedByHealth = sortBy(data, 'life_expectancy', 'DESC'); 
    // console.log("Health Data");
    // console.table(sortedByHealth);
    for (i=0;i < 10; i++){
      top_health_list.push(sortedByHealth[i]['country']); // loading top 10 countries based on health rank
    }
    global_top_health_list = top_health_list;

    for (i=sortedByHealth.length-1;i >= sortedByHealth.length-10; i--){   // loading bottom 10 countries based on health rank
      bottom_health_list.push(data[i]['country']);
    }
    global_bottom_health_list = bottom_health_list;

    //------------------------------------------------------------------------------------ 
    sortedByFamily = sortBy(data, 'Family', 'DESC');
    // console.log("Family Data");
    // console.table(sortedByFamily);
    for (i=0;i < 10; i++){
      top_family_list.push(sortedByFamily[i]['country']); // loading top 10 countries based on family rank
    }
    global_top_family_list = top_family_list;

    for (i=sortedByFamily.length-1;i >= sortedByFamily.length-10; i--){   // loading bottom 10 countries based on family rank
      bottom_family_list.push(data[i]['country']);
    }
    global_bottom_family_list = bottom_family_list;

    //------------------------------------------------------------------------------------ 
    sortedByFreedom = sortBy(data, 'freedom', 'DESC');
    // console.log("Freedom Data");
    // console.table(sortedByFreedom); 
    for (i=0;i < 10; i++){
      top_freedom_list.push(sortedByFreedom[i]['country']); // loading top 10 countries based on freedom rank
    }
    global_top_freedom_list = top_freedom_list;
    
    for (i=sortedByFreedom.length-1;i >= sortedByFreedom.length-10; i--){   // loading bottom 10 countries based on freedom rank
      bottom_freedom_list.push(data[i]['country']);
    }
    global_bottom_freedom_list = bottom_freedom_list;

    //------------------------------------------------------------------------------------ 
    sortedByEconomy = sortBy(data, "GDP", 'DESC');
    // console.log("Economy Data");
    // console.table(sortedByEconomy);
    for (i=0;i < 10; i++){
      top_economy_list.push(sortedByEconomy[i]['country']); // loading top 10 countries based on economy rank
    }
    global_top_economy_list = top_economy_list;
    
    for (i=sortedByEconomy.length-1;i >= sortedByEconomy.length-10; i--){   // loading bottom 10 countries based on economy rank
      bottom_economy_list.push(data[i]['country']);
    }  
    global_bottom_economy_list = bottom_economy_list;

    //------------------------------------------------------------------------------------ 
    sortedByTrust = sortBy(data,"trust",'DESC');
    // console.log("Trust Data");
    // console.table(sortedByTrust);
    for (i=0;i < 10; i++){
      top_trust_list.push(sortedByTrust[i]['country']); // loading top 10 countries based on trust rank
    }
    global_top_trust_list = top_trust_list;

    for (i=sortedByTrust.length-1;i >= sortedByTrust.length-10; i--){   // loading bottom 10 countries based on trust rank
      bottom_trust_list.push(data[i]['country']);
    }  
    global_bottom_trust_list = bottom_trust_list;
    //------------------------------------------------------------------------------------ 
    // Printing all the Top 10 Country Outputs for the below lists
    // 1)Happiness and Sadness, 2)Health 3)Family 4)Freedom 5)Economy 6)Trust 
    
    console.log("Happiness List: \n" + happiness_list);
    console.log("Sadness List: \n" + sadness_list);
    console.log("Top 10 Health List: \n" + top_health_list);
    console.log("Top 10 Family List: \n" + top_family_list);
    console.log("Top 10 Freedom List: \n" + top_freedom_list);
    console.log("Top 10 Economy List: \n" + top_economy_list);
    console.log("Top 10 Trust List: \n" + top_trust_list);
    console.log("Bottom 10 Health List: \n" + bottom_health_list);
    console.log("Bottom 10 Family List: \n" + bottom_family_list);
    console.log("Bottom 10 Freedom List: \n" + bottom_freedom_list);
    console.log("Bottom 10 Economy List: \n" + bottom_economy_list);
    console.log("Bottom 10 Trust List: \n" + bottom_trust_list);
    
    var chart_data = [{
      x: happiness_list,
      y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      type: "bar",
    }];
    var layout = {
      title: "Happiness Report 😀",
      xaxis: { title: "Countries"},
      yaxis: { title: "Score (Normalized 1-10)"}
    };
    Plotly.plot("plot", chart_data, layout);
  }
  
  //---------------------------------------------------------------------------------------------
  
  // Defining the new update Charts function which will call for new charts to be plotted each time 
  //this function is called from getDataCharts() function
  
  function updatePlotly(newdata, newlayout) {
    var BAR = document.getElementById("plot");  
    Plotly.newPlot(BAR, newdata, newlayout);
  }
  
  //---------------------------------------------------------------------------------------------
  
  function getDataCharts(dataset) {
    var data = [];
    var layout = {};
    
    console.log("Global Happiness List: \n" + global_happiness_list);
    console.log("Global Sadness List: \n" + global_sadness_list);
    console.log("Global Top 10 Health List: \n" + global_top_health_list);
    console.log("Global Top 10 Family List: \n" + global_top_family_list);
    console.log("Global Top 10 Freedom List: \n" + global_top_freedom_list);
    console.log("Global Top 10 Economy List: \n" + global_top_economy_list);
    console.log("Global Top 10 Trust List: \n" + global_top_trust_list);
    console.log("Global Bottom 10 Health List: \n" + global_bottom_health_list);
    console.log("Global Bottom 10 Family List: \n" + global_bottom_family_list);
    console.log("Global Bottom 10 Freedom List: \n" + global_bottom_freedom_list);
    console.log("Global Bottom 10 Economy List: \n" + global_bottom_economy_list);
    console.log("Global Bottom 10 Trust List: \n" + global_bottom_trust_list);
        
    switch (dataset) {
      
      case "dataset1":
      data = [{
        x: global_happiness_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'green'
        }
      }];
      layout = {
        title: "Top 10 Happiest Nations 😀",
        xaxis: { title: "Countries"},
        yaxis: { title: "Happiness Score (Normalized 1-10)"}
      };
      break;
      
      case "dataset2":
      data = [{
        x: global_sadness_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      layout = {
        title: "Top 10 Saddest Nations 😥",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Sadness Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      
      case "dataset3":
      data = [{
        x: global_top_health_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'coral'
        }
      }];
      layout = {
        title: "Top 10 Nations for Health and Life Expectancy",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Health Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      
      case "dataset4":
      data = [{
        x: global_top_family_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'lightskyblue'
        }
      }];
      layout = {
        title: "Top 10 Nations for Family Life",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Family Life Score (Normalized 1-10)"}
      };
      break;
      
      //-------------------------------------------------------------------------------------------------
      case "dataset5":
      data = [{
        x: global_top_freedom_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'lightcoral'
        }
      }];
      
      layout = {
        title: "Top 10 Nations for Freedom",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Freedom Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      case "dataset6":
      data = [{
        x: global_top_economy_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'lightgreen'
        }
      }];
      layout = {
        title: "Top 10 Nations for Economy, GDP and Per Capita Income",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Income Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      case "dataset7":
      data = [{
        x: global_top_trust_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'lightblue'
        }
      }];
      layout = {
        title: "Top 10 Nations for Trust (Anti-Corruption)",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Trust and Anti-Corruption Score (Normalized 1-10)"}
      };
      break;
      
      
      //-------------------------------------------------------------------------------------------------
      
      //-------------------------------------------------------------------------------------------------
      
      case "dataset8":
      data = [{
        x: global_bottom_health_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      layout = {
        title: "Bottom 10 Nations for Health and Life Expectancy",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Health Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      
      case "dataset9":
      data = [{
        x: global_bottom_family_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      layout = {
        title: "Bottom 10 Nations for Family Life",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Family Life Score (Normalized 1-10)"}
      };
      break;
      
      //-------------------------------------------------------------------------------------------------
      case "dataset10":
      data = [{
        x: global_bottom_freedom_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      
      layout = {
        title: "Bottom 10 Nations for Freedom",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Freedom Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      case "dataset11":
      data = [{
        x: global_bottom_economy_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      layout = {
        title: "Bottom 10 Nations for Economy, GDP and Per Capita Income",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Income Score (Normalized 1-10)"}
      };
      break;
      //-------------------------------------------------------------------------------------------------
      case "dataset12":
      data = [{
        x: global_bottom_trust_list,
        y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        type: "bar",
        marker: {
          color: 'red'
        }
      }];
      layout = {
        title: "Bottom 10 Nations for Trust (Anti-Corruption)",
        xaxis: { title: "Countries",tickangle: 0},
        yaxis: { title: "Trust and Anti-Corruption Score (Normalized 1-10)"}
      };
      break;
      
      
      default:
      data = [];
      layout = {title: "No Graph has been selected"};
    }
    updatePlotly(data, layout);
  }
  
  init();
  