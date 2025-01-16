var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Target%20Store%20Locations.csv"
var address = getColumn(url, 1);
var city = getColumn(url, 2);
var county = getColumn(url,3);
var state = getColumn(url, 8);

// Function to get a list of unique states
function getStatesWithTargets() {
    var uniqueState = [];
    for (var i = 0; i < state.length; i++) {
        if (!uniqueState.includes(state[i])) {
            uniqueState.push(state[i]);
        }
    }
    return uniqueState;
}
console.log(getStatesWithTargets())

function howManyTargetsInAState(stateName) {
    // Count the number of targets in the given state (stateName)
    var count = 0;
    var wasMatch = false;
    for (var i = 0; i < state.length; i++) {
        if (state[i] == stateName) {
            count += 1;  // Inplement the count when the state matches
            wasMatch= true;
        }

    }
    if (wasMatch == false) {
        return -1;  
    }

    function getCitiesWithMostTargets(){
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

    return count;  // Return the count of targets for the given state
}
console.log(howManyTargetsInAState("maylnd"));
