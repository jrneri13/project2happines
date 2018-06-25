// Start of Code
// Total - 6 SECTIONS

//---------------------------------------------------------------------------------------------
// SECTION 1 - Defining variables for HTML page references

// Define references for the tbody element, search input fields and search button

var $tbody = document.querySelector("tbody"); // Variable for table body in our HTML (for populating table in our HTML), this will be used in renderTable() function to 'populate' the table


// Variable definitions for our 8 Search Fields -> Rank, Country, Happiness, Health, Family, Freedom, Economy and Trust

var $RankInput = document.querySelector("#Rank"); // Variable for Rank Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $CountryInput = document.querySelector("#Country"); // Variable for Country Input search category in our HTML , which will be used in our handleSearchButtonClick() function
var $HappinessInput = document.querySelector("#Happiness"); // Variable for Happiness Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $HealthInput = document.querySelector("#Health"); // Variable for Health Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $FamilyInput = document.querySelector("#Family"); // Variable for Family Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $FreedomInput = document.querySelector("#Freedom"); // Variable for Freedom Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $EconomyInput = document.querySelector("#Economy"); // Variable for Economy Input search category in our HTML, which will be used in our handleSearchButtonClick() function
var $TrustInput = document.querySelector("#Trust"); // Variable for Trust Input search category in our HTML, which will be used in our handleSearchButtonClick() function


// Search Button variable defintion
var $searchBtn = document.querySelector("#search"); // Variable to call Search Button function in our HTML


//---------------------------------------------------------------------------------------------
// SECTION 2 - Defining event listeners for handling search button clicks and for handling a user pressing an 'enter' key...

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
// handleSearchButtonClick function has all the logic for searching our table with the exact data elements we want to render
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Add an event listener to initiate a search (by kicking off handleSearchButtonClick() function by just pressing the 'enter' key :)
// Just a shortcut for quicker search results where you don't have to 'click' on the search button everytime...
document.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    handleSearchButtonClick(); // This is where we are calling the handleSearchButtonClick() function...
  }
});


//---------------------------------------------------------------------------------------------
// SECTION 3 - Render Table (renderTable()) Function

// Set Filtered Data to our source data, which is provided to us in our data.js file
var filtered_data = dataSet;

// RENDER TABLE FUNCTION
// Defining renderTable function. This function will be our main function to populate the table data. It will render the
// filtered data (filtered_data) to our table body (tbody)
function renderTable(filtered_data) { // function starts
  $tbody.innerHTML = "";
  for (var i = 0; i < filtered_data.length; i++) {
    // Get get the current address object and its fields
    var sighting = filtered_data[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

//---------------------------------------------------------------------------------------------
// SECTION 4 - handleSearchButtonClick() function
// This function will contain all our query logic for populating the filtered data (filtered_data) to our table body (tbody)
// This is a our main function for all the code logic requiring for searching and filtering our table contents

function handleSearchButtonClick() // function starts
{
  // Format the user's search by removing leading and trailing whitespace, lowercase the strings for our 5 Search Fields
  // Our 8 Search Fields are -> Rank, Country, Happiness, Health, Family, Freedom, Economy and Trust
  // This is where we are defining 8 new variables to our earlier established 8 user input variables (SECTION 1) to remove any user white spaces
  // We are making our search string lowercase as well so that all our inputs remain consistent.
  
  
  var filterRank = $RankInput.value.trim().toLowerCase();
  var filterCountry = $CountryInput.value.trim().toLowerCase();
  var filterHappiness = $HappinessInput.value.trim().toLowerCase();
  var filterHealth = $HealthInput.value.trim().toLowerCase();
  var filterFamily = $FamilyInput.value.trim().toLowerCase();
  var filterFreedom = $FreedomInput.value.trim().toLowerCase();
  var filterEconomy = $EconomyInput.value.trim().toLowerCase();
  var filterTrust = $TrustInput.value.trim().toLowerCase();
  
  
  // Defining our first IF Condition - This condition will kick off if a user enters 'any value' in any 'one' of our 8 search fields
  // Our 8 Search Fields are -> Rank, Country, Happiness, Health, Family, Freedom, Economy and Trust
  
  if (filterRank || filterCountry || filterHappiness || filterHealth || filterFamily || filterFreedom || filterEconomy || filterTrust)
  {
    // Code logic for filtering the table contents based on data being input on the Rank field
    if (filterRank){ 
      //Set filtered_data to an array of all table enteries whose "Rank" matches the filter
      filtered_data = dataSet.filter (function(sighting) { 
        var SightingRank = sighting.rank.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data
        return SightingRank === filterRank;
      });
    } else {filtered_data = dataSet}; // return initial dataSet if "Rank" Search Field is blank
    
    // Code logic for filtering the table contents based on data being input on the Country field
    if (filterCountry){
      //Set filtered_data to an array of all table enteries whose "Country" matches the filter
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingCountry = sighting.country.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data
        return SightingCountry === filterCountry;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Country" search field is blank
    
    // Code logic for filtering the table contents based on data being input on the Happiness field
    if (filterHappiness){
      //Set filtered_data to an array of all table enteries whose "Happiness" matches the filter
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingHappiness = sighting.happiness_score.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data      
        return SightingHappiness === filterHappiness;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Happiness" search field is blank
    
    // Code logic for filtering the table contents based on data being input on the Health field
    if (filterHealth){
      //Set filtered_data to an array of all table enteries whose "Health" matches the filter
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingHealth = sighting.life_expectancy.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data        
        return SightingHealth === filterHealth;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Health" search field is blank
    
    // Code logic for filtering the table contents based on data being input on the Family field
    if (filterFamily){
      //Set filtered_data to an array of all table enteries whose "Family" matches the filter      
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingFamily = sighting.Family.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data        
        return SightingFamily === filterFamily;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Family" seach field is blank
    
    // Code logic for filtering the table contents based on data being input on the Freedom field
    if (filterFreedom){
      //Set filtered_data to an array of all table enteries whose "Freedom" matches the filter      
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingFreedom = sighting.freedom.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data        
        return SightingFreedom === filterFreedom;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Freedom" seach field is blank
    
    // Code logic for filtering the table contents based on data being input on the Economy field
    if (filterEconomy){
      //Set filtered_data to an array of all table enteries whose "Economy" matches the filter      
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingEconomy = sighting.GDP.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data        
        return SightingEconomy === filterEconomy;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Economy" seach field is blank
    
    // Code logic for filtering the table contents based on data being input on the Trust field
    if (filterTrust){
      //Set filtered_data to an array of all table enteries whose "Trust" matches the filter      
      filtered_data = filtered_data.filter (function(sighting) {
        var SightingTrust = sighting.trust.toLowerCase();
        // If true, add the corresponding table data to the filtered_data, otherwise don't add it to filtered_data        
        return SightingTrust === filterTrust;
      });
    } else {filtered_data = filtered_data}; // return initial filtered_data dataSet if "Trust" seach field is blank
    
    
  } else {
    //location.reload(); //Commented this code out as we don't need to refresh the web page if the user doesn't select any inputs in the search fields
    // Earlier I was refreshing the web page, but it is bad for performance. Instead I am now rendering 'full table' when user doesn't put any value in the search fields
    filtered_data = dataSet; // This is where we render full table, i.e., we re-initialize our table (complete data set) if all search enteries are blank
  }
  $('#table').DataTable().destroy(); // Destroy the already initialized earlier version of the pagination table
  renderTable(filtered_data); // Call the rederTable() function to render (display) the table with our filtered dataset (filtered_data)
  tushaar_pagination(); // Re-initate the pagination table with the new rendered search results
}

//---------------------------------------------------------------------------------------------
// SECTION 5 - Pagination function (tushaar_pagination())

// Setting up pagination function - This function is acquired via 'Google Fu :)'
function tushaar_pagination() 
{
  $(document).ready(function() {
    if ( $.fn.dataTable.isDataTable( '#table' ) ) { // This conditions checks for table being active and bypasses an active table - this is fail safe to remove warning errors
      $('#table').DataTable();
    }
    else {
      $('#table').DataTable({
        "pagingType": "full_numbers",
        destroy: true, // table needs to be destroyed after one active session
        paging: true, // this parameter sets the table paging to be active
        searching: false // this parameter removes the 'search' box, which is optional but I removed it because it may otherwise confuse the user
      });
    } 
  });
}

//---------------------------------------------------------------------------------------------
// SECTION 6 (LAST SECTION) - Rendering our table for the first time when web page first loads
// Render the 'entire table' for the first time when our web page loads by calling our renderTable function and by passing the 
// filtered_data parameter
renderTable(filtered_data);
tushaar_pagination(); // Initiate the pagination function for the first time the browser page loads

//---------------------------------------------------------------------------------------------
// End of Code