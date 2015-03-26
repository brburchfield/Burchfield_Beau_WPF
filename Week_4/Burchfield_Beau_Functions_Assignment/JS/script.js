/*
 Beau Burchfield
 SDI-1503
 3/25/2015
 Functions Assignment
 */

//TODO: Variables

//Prompt for lotto type (spacing for aesthetics).
var whichLotto = prompt("Do you want numbers for the Powerball or the Florida lottery?\n\n " +
"        Type PB for Powerball, and FL for Florida lottery.");

//Make user input uppercase to match variable requirements
whichLotto = whichLotto.toUpperCase();

//Validation. If nothing is entered,
while(whichLotto == null || (whichLotto !== "PB" && whichLotto !== "FL")) {
    whichLotto = prompt("You must enter either PB or FL.");
    whichLotto = whichLotto.toUpperCase();
}

//variable for result of Powerball function
var pbRandom;

//variable for result of Florida lottery function
var flRandom;


console.log(whichLotto);

//TODO: Functions
//Powerball function
function powerballNum(max, max2, min, num){

    var pbArray = [];

    //Math.round(Math.random() = ( max - min ) + min)
    for (var p = 0; p < num; p++) {
        var pbRanNum = Math.round(Math.random() * (max - min) + min);

        pbArray[p] = pbRanNum;
    }





    //Florida lottery function
    function floridaNum(max, min, num){

        var flArray = [];

        //Math.round(Math.random() = ( max - min ) + min)
        for (var f = 0; f < num; f++) {
            var flRanNum = Math.round(Math.random() * (max - min) + min);

            flArray[f] = flRanNum;
        }


//TODO: Main Code

//If user selected the Powerball
if(whichLotto === "PB"){
    //Output Powerball confirmation
    console.log("OK. You want the Powerball numbers.");
    //Call Powerball function; assign result to variable
    pbRandom = powerballNum(59, 35, 1, 5);
    //Output result of function
    console.log("The numbers are: " +pbRandom[0]+", "+pbRandom[1]+", "+pbRandom[2]+", "+pbRandom[3]+", "+pbRandom[4]+", " +
    "and the Powerball is " + pbRandom[5]+".");
}
//If user selected the Florida lottery
if(whichLotto === "FL"){
    //Output Florida lotto confirmation
    console.log("OK. You want the Florida lottery numbers.");
    //Call Florida function; assign result to variable
    flRandom = floridaNum(53, 1, 6);
    //Output result of function
    console.log("The numbers are: " + flRandom[0] + ", " + flRandom[1] + ", " + flRandom[2] + ", " + flRandom[3] + ", "
    + flRandom[4] + ", and " + flRandom[5] + ".");
}
