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
gaugeReading = prompt("What is the current reading of your fuel guage (in %)? \nExample: 0.90 = 90%.");
//Prompt for tank capacity
tankCapacity = prompt("What is your gas tank capacity (in gallons)?");

//--Simplifying the problem (Calculating variables)---

//Calculating total gas
totalGas = tankCapacity * gaugeReading;
//Calculating maximum mileage
maxMileage = totalGas * gasEfficiency;


//Creating if, else statement for output

if(maxMileage >= 200) {
    console.log("Yes, you can make it without stopping for gas!");
} else {
    console.log("You only have " + totalGas + " gallons of gas in your tank, better get gas now while you can!");
}





//~~~Check The Login~~~


//--Declaring Variables--

//Username entered by user
var userName;
//Password entered by user
var passWord;
//Correct userName;
var goodUser;
//Correct Password;
var goodPassword;

//--Assigning values to variables--

//Prompt for username
userName = prompt("Please enter your username.");
//Prompt for password
passWord = prompt("Please enter your password.");
//Correct username
goodUser = "llewis";
//Correct password
goodPassword = "FS_SDI";

//--Creating if, else if, else statement--

if(userName == goodUser && passWord == goodPassword){
    console.log("Welcome, " + userName + "!");
} else if(userName == goodUser && passWord !== goodPassword){
    console.log("Password does not match our records.");
} else {
    console.log("User not found. Try again.");
}





//~~~Tire Pressure I~~~

//--Declaring Variables--

//Front, Driver's Side Tire
var pressureFD;
//Front, Passenger's Side Tire
var pressureFP;
//Rear, Driver's Side Tire
var pressureRD;
//Rear, Passenger's Side Tire
var pressureRP;

