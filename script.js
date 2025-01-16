var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Target%20Store%20Locations.csv"
var address = getColumn(url, 1);
var city = getColumn(url, 2);
var county = getColumn(url,3);
var state = getColumn(url, 8);

// Function to get a list of unique states
function getStatesWithTargets() {
    var uniqueStates = [];
    for (var i = 0; i < states.length; i++) {
        if (!uniqueStates.includes(states[i])) {
            uniqueStates.push(states[i]);
        }
    }
    return uniqueStates;
}
console.log(getStatesWithTargets())

function howManyTargetsInAState(stateName) {
    // Count the number of targets in the given state (stateName)
    var count = 0;
    var wasMatch = false;
    for (var i = 0; i < states.length; i++) {
        if (states[i] == statesName) {
            count += 1;  // Inplement the count when the state matches
            wasMatch= true;
        }

    }
    if (wasMatch == false) {
        return -1;  
    }
  return count;  // Return the count of targets for the given state
}
console.log(howManyTargetsInAState(""));

   
    
    
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
    if(stateOrCity.toLowerCase() == states[i].toLowerCase() || stateOrCity.toLowerCase() == city[i].toLowerCase() ){
        addressLoco.push(address[i])
        count += 1
        wasMatch= true;
    }
 }
if(wasMatch == false){
    return "None Found"
}
 return addressLoco;

}

console.log(getTargetAddressesIn(""))


