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


console.log(whichLotto);
