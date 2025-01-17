var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Target%20Store%20Locations.csv"
var address = getColumn(url, 1);
var city = getColumn(url, 2);
var county = getColumn(url,3);
var latitudes = getColumn(url,4);
var longitudes = getColumn(url, 5);
var state = getColumn(url, 8);


// Sifts through a list of states that have targest and creats a list of only the unique ones
// uniqueState {List} - The final list of only unique states
// return {List} - The list of only the unique states
function getStatesWithTargets() {
    var uniqueState = [];
    for (var i = 0; i < state.length; i++) {
        if (!uniqueState.includes(state[i].toLowerCase())) {
            uniqueState.push(state[i].toLowerCase());
        }
    }
    return uniqueState;
}
console.log(getStatesWithTargets())


// Figures out how many targets are in the given state
// stateName {String} - A string of the state names
// count {Number} - A number to count how many are in the given state
// wasMatch {Boolean} - A variable that returns a different answer if you type the wrong thing
//  return {Number} - The number of targets in a state
function howManyTargetsInAState(stateName) {
    // Count the number of targets in the given state (stateName)
    var count = 0;
    var wasMatch = false;
    for (var i = 0; i < state.length; i++) {
        if (state[i] == stateName) {
            count += 1;  // Inplement the count when the state matches
            wasMatch = true;
        }

    }
    if (wasMatch == false) {
        return -1;  
    }

    return count;  // Return the count of targets for the given state
}
console.log(howManyTargetsInAState("California"));

// Measures the closest target to your longitude and latitude
// longitude {Number} A code that has all of the longitudes
// latitude {Number} A code that has all of the latitudes
// shortestDistance {Number} A code that holds the shortest distance you can have between you and your target
// rise {Number} - A number that has the rise of your longitude
// run {Number} - A number that has the run of your latitude
// hypoteneuse {Number} - The longest side of a right triangle by taking the rise and run giving us a distance
// distance {Number} - The overall distance of how far longitude and latitude the target is
// return {String} - The address of the closest target to the given longitude and latitude
function getTargetClosestToMe(longitude, latitude){
    var shortestDistance = 100000000000;
    var closestTarget ="";
    for (var i = 0; i < address.length; i++) {
        var rise = (longitudes[i] - longitude)
        var run =  (latitudes[i] - latitude)
        var hypoteneuse = (rise * rise) + (run * run)
        var distance = Math.sqrt(hypoteneuse)
        if(distance < shortestDistance){
            shortestDistance = distance;
            closestTarget = address[i]
        }
          
    }
    return closestTarget;
}
console.log(getTargetClosestToMe(32,-35))

    function getCitiesWithMostTargets(){
        //with this function we are looking to find the city that contains the most amount of targets.
        //The output that comes out should be chicago which has the most conpared to any city.
var cities = [];
    for(var i =0; i<city.length; i++){
        if(!cities.includes(city[i].toLowerCase())){
            cities.push(city[i].toLowerCase());
        }
    }
    var cityCounts = [];
    for(var i=0;i<cities.length; i++){
        var count = 0;
        for(var j = 0; j <city.length; j++){
            if(cities[i].toLowerCase() == city[j].toLowerCase()){
                count++;
            }
        }
        cityCounts.push(count);
    }

        
var highestCity = "";
var targetMax =0;
for(var i = 0; i < cityCounts.length; i++){
    if(targetMax < cityCounts[i]){
        targetMax = cityCounts[i];
        highestCity = cities[i]
    }
}
    return highestCity;
}
console.log(getCitiesWithMostTargets())

function getTargetAddressesIn(stateOrCity){
var addressLoco =[];
var wasMatch= false
 for(var i = 0; i < address.length; i++){
    if(stateOrCity.toLowerCase() == state[i].toLowerCase() || stateOrCity.toLowerCase() == city[i].toLowerCase() ){
        addressLoco.push(address[i])
        county += 1
        wasMatch= true;
    }
 }
if(wasMatch == false){
    return "None Found"
}
 return addressLoco;

}

console.log(getTargetAddressesIn(""))

function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
