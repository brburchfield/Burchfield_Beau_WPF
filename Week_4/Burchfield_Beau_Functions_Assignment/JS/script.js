/*
 Beau Burchfield
 SDI-1503
 3/25/2015
 Functions Assignment
 */

//TODO: Variables

//variable for result of Powerball function
var pbRandom;

//variable for result of Florida lottery function
var flRandom;

//Prompt for lotto type (spacing for aesthetics).
var whichLotto = prompt("Do you want numbers for the Powerball or the Florida lottery?\n\n " +
"        Type PB for Powerball, and FL for Florida lottery.");

//Change user input to uppercase to match variable requirements
whichLotto = whichLotto.toUpperCase();

//Validation. If nothing is entered, this will re-prompt the user.
while(whichLotto === "" || (whichLotto !== "PB" && whichLotto !== "FL")) {
    whichLotto = prompt("You must enter either PB or FL.");
    whichLotto = whichLotto.toUpperCase();
}


//TODO: Functions

//Powerball function
function powerballNum(max, max2, min, num){

    var pbArray = [];

    //Math.round(Math.random() = ( max - min ) + min)
    for (var p = 0; p < num; p++) {
        var pbRanNum = Math.round(Math.random() * (max - min) + min);

        //Assign result of math object to array
        pbArray[p] = pbRanNum;
    }
    //The following is my code to ensure that the first five numbers of the Powerball are unique

    //As long as the first number of the array matches any other number, it will be assigned another random value
    while(pbArray[0] === pbArray[1] || pbArray[0] === pbArray[2] || pbArray[0] === pbArray[3] || pbArray[0] === pbArray[4]){
        pbArray[0] = Math.round(Math.random() * (max-min) + min);
    }

    //As long as the second number of the array matches any other number, it will be assigned another random value
    while(pbArray[1] === pbArray[0] || pbArray[1] === pbArray[2] || pbArray[1] === pbArray[3] || pbArray[1] === pbArray[4]){
        pbArray[1] = Math.round(Math.random() * (max-min) + min);
    }

    //As long as the third number of the array matches any other number, it will be assigned another random value
    while(pbArray[2] === pbArray[0] || pbArray[2] === pbArray[1] || pbArray[2] === pbArray[3] || pbArray[2] === pbArray[4]){
        pbArray[2] = Math.round(Math.random() * (max-min) + min);
    }

    //As long as the fourth number of the array matches any other number, it will be assigned another random value
    while(pbArray[3] === pbArray[0] || pbArray[3] === pbArray[1] || pbArray[3] === pbArray[2] || pbArray[3] === pbArray[4]){
        pbArray[3] = Math.round(Math.random() * (max-min) + min);
    }
    //Adding this code for the fifth is redundant, as no other numbers equal the fifth, now

    //This is the final, Powerball number
    pbRanNum = Math.round(Math.random() * (max2 - min) + min);
    //This adds the final number to the array
    pbArray[p] = pbRanNum;

    return pbArray;

}


testarray[car, truck, boat, train]
8

    //Florida lottery function
    function floridaNum(max, min, num){

        var flArray = [];

        //Math.round(Math.random() = ( max - min ) + min)
        for (var f = 0; f < num; f++) {
            var flRanNum = Math.round(Math.random() * (max - min) + min);

            //Assign result of math object to array
            flArray[f] = flRanNum;
        }
        //The following is my code to ensure that the six numbers of the Florida lottery are unique

        //As long as the first number of the array matches any other number, it will be assigned another random value
        while(flArray[0] === flArray[1] || flArray[0] === flArray[2] || flArray[0] === flArray[3] || flArray[0] === flArray[4] || flArray[0] === flArray[5]) {
            flArray[0] = Math.round(Math.random() * (max - min) + min);
        }

        //As long as the second number of the array matches any other number, it will be assigned another random value
        while(flArray[1] === flArray[0] || flArray[1] === flArray[2] || flArray[1] === flArray[3] || flArray[1] === flArray[4] || flArray[1] === flArray[5]) {
            flArray[1] = Math.round(Math.random() * (max - min) + min);
        }

        //As long as the third number of the array matches any other number, it will be assigned another random value
        while(flArray[2] === flArray[0] || flArray[2] === flArray[1] || flArray[2] === flArray[3] || flArray[2] === flArray[4] || flArray[2] === flArray[5]) {
            flArray[2] = Math.round(Math.random() * (max - min) + min);
        }

        //As long as the forth number of the array matches any other number, it will be assigned another random value
        while(flArray[3] === flArray[0] || flArray[3] === flArray[1] || flArray[3] === flArray[2] || flArray[3] === flArray[4] || flArray[3] === flArray[5]) {
            flArray[3] = Math.round(Math.random() * (max - min) + min);
        }

        //As long as the fifth number of the array matches any other number, it will be assigned another random value
        while(flArray[4] === flArray[0] || flArray[4] === flArray[1] || flArray[4] === flArray[2] || flArray[4] === flArray[3] || flArray[4] === flArray[5]) {
            flArray[4] = Math.round(Math.random() * (max - min) + min);
        }
        //Adding this code for the sixth is redundant, as no other numbers equal the sixth, now


        return flArray;

    }







//TODO: Main Code

//If user selected the Powerball
if(whichLotto === "PB"){
    //Call Powerball function; assign result to variable
    pbRandom = powerballNum(59, 35, 1, 5);
    //Output result of function
    console.log("The numbers are: " +pbRandom[0]+", "+pbRandom[1]+", "+pbRandom[2]+", "+pbRandom[3]+", "+pbRandom[4]+", " +
    "and the Powerball is " + pbRandom[5]+".");
}
//If user selected the Florida lottery
if(whichLotto === "FL"){
    //Call Florida function; assign result to variable
    flRandom = floridaNum(53, 1, 6);
    //Output result of function
    console.log("The numbers are: " + flRandom[0] + ", " + flRandom[1] + ", " + flRandom[2] + ", " + flRandom[3] + ", "
    + flRandom[4] + ", and " + flRandom[5] + ".");
}

//Test Results
/* Powerball numbers: 51, 55, 6, 20, 46, with PB 5
 FL lottery numbers:  35, 5, 46, 18, 8, and 14 */

