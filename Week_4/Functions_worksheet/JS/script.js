/*
Beau Burchfield
3/23/2015
Functions Worksheet
 */

//TODO ~~~Circumference~~~

//Calculate the circumference of a circle.

//Parameter(s) for function:
//Radius of the circle
var radius = 15;

function calcCircle(r){
    var circumference = (2 * r) * 3.14;
//Return:
//Circumference of the circle
    return circumference;
}

//Call function
var circleCircumference = calcCircle(radius);

//Result to print to the console:
//“The circumference of the circle is X”;
console.log("The circumference of the circle is " + circleCircumference + ".");




//TODO ~~~Stung!~~~

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function

//Given:
//Victim’s weight (in pounds)
var victimWeight = 180;


//Parameter(s) for function:
//Victim’s weight (in pounds)
function beeStings(w) {
    var bees = w * 8.666666667;

//Return:
//Number of Bee stings
    return bees;
}

//Call function


//Result to print to the console:
//“It takes X bee stings to kill this animal."

