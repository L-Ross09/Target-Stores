# Target-Stores
The function's main goal is to provide information about Target stores and information about it envolving location.
#
#####  A helper function that Sifts through a list of states that have targest and creats a list of only the unique ones
###### @var uniqueState {List} - The final list of only unique states
###### @return {List} - The list of only the unique states in lower case
**`function getStatesWithTargets()`**
#
##### A function that figures out how many targets are in a given state
###### @param stateName {String} - A string of the state names
###### @var count {Number} - A number to count how many are in the given state
###### @var wasMatch {Boolean} - A variable that returns a different answer if you type the wrong thing
###### @return  {Number} - The number of targets in a state
**`function howManyTargetsInAState(stateName)`**
#
##### A function that finds the closest target to the user
###### @param longitude {Number} A code that has all of the longitudes
###### @param latitude {Number} A code that has all of the latitudes
###### @var shortestDistance {Number} A code that holds the shortest distance you can have between you and your target
###### @var rise {Number} - A number that has the rise of your longitude
###### @var run {Number} - A number that has the run of your latitude
###### @var hypoteneuse {Number} - The longest side of a right triangle by taking the rise and run giving us a distance
###### @var distance {Number} - The overall distance of how far longitude and latitude the target is
###### @return {String} - The address of the closest target to the given longitude and latitude
**`function getTargetClosestToMe(longitude, latitude)`**
#
##### A function that figures out the city with the most Target stores
######
**`function getCitiesWithMostTargets()`**
#
##### A function that obtains multiple Target store addresses in a determined area
######
**`function getTargetAddressesIn(stateOrCity)`**
