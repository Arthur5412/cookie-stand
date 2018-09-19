'use strict';
//Declare the array and items in the array
//var days = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Make objective with values
// var SeaTacAirport = {
//   SeatacArray:[],
//   mincust:3,
//   maxcust:24,
//   AvgCookieSale:1.2,
// };
// var SeattleCenter = {
//   SeatacArray:[],
//   mincust:11,
//   maxcust:38,
//   AvgCookieSale:3.7,
// };
// var CapitalHill = {
//   SeatacArray:[],
//   mincust:20,
//   maxcust:38,
//   AvgCookieSale:2.3,
// };
// var Alki = {
//   SeatacArray:[],
//   mincust:2,
//   maxcust:16,
//   AvgCookieSale:4.6,
// };
function getRandom(mincust,maxcust)
{
  return Math.floor(Math.random()*(maxcust-mincust+1)+mincust);
}
getRandom(2,38);
console.log(getRandom);
