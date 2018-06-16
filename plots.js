function init() {
var data = [{
  x: ["Norway", "Denmark", "Iceland", "Switzerland",
      "Finland", "Netherlands", "Canada", "New Zealand", "Sweden", "Australia"],
  y: [7.54, 7.52, 7.5, 7.49, 7.46, 7.38, 7.31, 7.31, 7.28, 7.28],
 // y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],

  type: "bar",
}];

var layout = {
  title: "Happiness Report 😀",
  xaxis: { title: "Countries"},
  yaxis: { title: "Score (Normalized 1-10)"}
};

Plotly.plot("plot", data, layout);
}

function updatePlotly(newdata, newlayout) {
  var BAR = document.getElementById("plot");  
  Plotly.newPlot(BAR, newdata, newlayout);
}

function getData(dataset) {
  var data = [];
  var layout = {};
  switch (dataset) {

    case "dataset1":
      data = [{
        x: ["Norway", "Denmark", "Iceland", "Switzerland",
            "Finland", "Netherlands", "Canada", "New Zealand", "Sweden", "Australia"],
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
        x: ["C. African Republic", "Burundi", "Tanzania", "Syria",
            "Rwanda", "Togo", "Guinea", "Liberia", "South Sudan", "Yemen"],
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
        x: ["Singapore", "Hong Kong", "Japan", "South Korea", "Spain", "Switzerland", "Italy", "Luxembourg", "Cyprus", "France"],
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
        x: ["Iceland","Ireland","Denmark","Uzbekistan","New Zealand","Finland", "Norway", "Spain", "Switzerland", "Australia"],
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
        x: ["Uzbekistan", "Norway", "Cambodia", "Iceland", "Denmark", "Switzerland", "Finland","New Zealand", "Sweden", "Canada"],
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
        x: ["Qatar", "Luxembourg","Singapore", "Kuwait", "UAE", "Norway", "Switzerland", "Hong Kong", "USA", "Ireland"],
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
        x: ["Singapore","Rwanda","Qatar","Denmark","Sweden","New Zealand","Finalnd","Switzerland","UAE","Luxembourg"],
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
  x: ["Lesotho", "Sierra Leone", "C. African Repbulic", "Chad", "Ivory Coast", "Angola","Nigeria","Mozambique", "Somalia", "Cameroon"],
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
  x: ["C. African Republic", "Syria", "Togo", "Benin", "Malawi", "Georgia", "Afganistan", "South Sudan", "Burundi", "Haiti"],
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
  x: ["Angola","Sudan","Haiti","Burundi","Syria","Greece","Mauritania","Afganistan","Ukraine","S. Sudan"],
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
  x: ["C.African Republic","Somalia","Burundi","Congo","Liberia","Niger","Malawi","Mozambique","Guinea","Togo"],
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
  x: ["Bosnia","Romania","Trinidad","Moldova","Bulgaria","Lithuania","Indonesia","Portugal","China","Ukraine"],
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
