// Make sure app.js is loaded and connected to index.html
console.log("app.js loaded")


// Define svg area for eventual chart
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;


// Load the csv data using d3.csv
d3.csv("assets/data/data.csv").then(csvData => {
    console.log("csv data has been loaded");
    console.log(csvData);

    // Parse the data
    csvData.forEach(function(csvData) {
        csvData.poverty = +csvData.poverty;
        csvData.age = +csvData.age;
        csvData.income = +csvData.income;
        csvData.healthcare = +csvData.healthcare;
        csvData.obesity = +csvData.obesity;
        csvData.smokes = +csvData.smokes;
        });


});

// Include state abbreviations in the scatter plot circles

// Populate the scatter plot with two variables
// Healthcare v. Poverty or Smokers v. Age

// BONUS
// Place additional labels and a click event
// So that the user can pick what data to display, animate the transition
// Incorpare d3-tip (Use d3-tip.js plugin)
