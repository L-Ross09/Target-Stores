var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/Target%20Store%20Locations.csv"
var address = getColumn(url, 1);
var city = getColumn(url, 2);
var county = getColumn(url,3);
var state = getColumn(url, 8);

console.log(address)
