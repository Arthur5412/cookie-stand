'use strict';
//write up some variables to store date
//stores the min max/hourly  customers and the average cookies per customer in object properties
//use a method of that object to generate a random number of customers per hour
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//Store the results for each location in a separate array... perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
//Calculating the sum of these hourly totals; your output for each location should look like this:
// Declare a variable with the values
var SeaTacAirport = {
    Seatacarray: [],
    mincust:3,
    maxcust:24,
    AvgCookieSale:1.2,
    
};
var SeattleCenter = {
    SeatacArray:[],
    mincust:11,
    maxcust:38,
    AvgCookieSale:3.7,
};
var CapitalHill = {
    SeatacArray:[],
    mincust:20,
    maxcust:38,
    AvgCookieSale:2.3,
};
var Alki = {
    SeatacArray:[],
    mincust:2,
    maxcust:16,
    AvgCookieSale:4.6,
};
function getRandom(mincust,maxcust)
{
return Math.floor(Math.random()*(maxcust-mincust+1)+mincust);
}
getRandom(2,38);
//alert(getRandom);