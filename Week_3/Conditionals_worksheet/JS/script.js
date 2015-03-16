/*
Beau Burchfield
3/16/2015
Conditionals Worksheet
*/


// ~~~Last Chance for Gas!~~~


//--Declaring Variables--

//Gas efficiency of the car
var gasEfficiency;
//Gauge reading of the gas tank (in %)
var gaugeReading;
//Car's gas tank capacity (in gallons)
var tankCapacity;
//Car's total gas amount
var totalGas;
//Car's maximum mileage
var maxMileage;

//--Assigning values to variables--

//Prompt for gas efficiency
gasEfficiency = prompt("What is your vehicle's average fuel efficiency (in mpg)?");
//Prompt for reading of gas tank
gaugeReading = prompt("What is the current reading of your fuel guage (in %)? \nExample: .90 = 90%.");
//Prompt for tank capacity
tankCapacity = prompt("What is your gas tank capacity (in gallons)?");

//--Simplifying the problem (Calculating variables)---

//Calculating total gas
totalGas = tankCapacity * gaugeReading;
//Calculating maximum mileage
maxMileage = totalGas * gasEfficiency;