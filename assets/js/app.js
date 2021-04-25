// Make sure app.js is loaded and connected to index.html
console.log("app.js loaded")

// Load the csv data using d3.csv
d3.csv("assets/data/data.csv").then(function(csvData) {
    console.log("csv data has been loaded");
    console.log(csvData);
});

// Create a static scatter plot shell

// Create and situate axes labels to the left and bottom of the chart

// Include state abbreviations in the scatter plot circles

// Populate the scatter plot with two variables
// Healthcare v. Poverty or Smokers v. Age

// BONUS
// Place additional labels and a click event
// So that the user can pick what data to display, animate the transition
// Incorpare d3-tip (Use d3-tip.js plugin)
