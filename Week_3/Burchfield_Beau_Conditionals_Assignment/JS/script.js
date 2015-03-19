/*
Beau Burchfield
3/19/2015
Conditionals Assignment
 */


//Declare variables (including array).
var userCost;
var guestNumber;
var guest1Cost;
var guest2Cost;
var guest3Cost;
var guest4Cost;
var guest5Cost;
var beverages;
var beverageCost;
var totalCost;
var tipCost;
var fullPrice;

//Assign values to variables (via prompts).
guestNumber = prompt("How many guests do you have?", "Maximum is 5.");
//Cast string input to number.
guestNumber = Number(guestNumber);

if(guestNumber > 5){
//For if the user types a number over the maximum amount (5).
    alert("The maximum amount of guests you may enter is 5. Please reload the page.");
} else if(guestNumber >= 0){
//For if the user types any of the numbers within 0-5. This is to prompt the user as many times as numbers of guests.
    if(guestNumber >= 0) {
        if (guestNumber >= 1) {
            guest1Cost = prompt("How much was your first guest's meal?", "Enter as a decimal. (i.e. 19.20 = $19.20)");
            if (guestNumber >= 2) {
                guest2Cost = prompt("How much was your second guest's meal?", "Enter as a decimal. (i.e. 19.20 = $19.20)");
                if (guestNumber >= 3) {
                    guest3Cost = prompt("How much was your third guest's meal?", "Enter as a decimal. (i.e. 19.20 = $19.20)");
                    if (guestNumber >= 4) {
                        guest4Cost = prompt("How much was your forth guest's meal?", "Enter as a decimal. (i.e. 19.20 = $19.20)");
                        if (guestNumber >= 5) {
                            guest5Cost = prompt("How much was your fifth guest's meal?", "Enter as a decimal. (i.e. 19.20 = $19.20)");

                        }
                    }
                }
            }
        }
    }
}else{
//For if the user types anything that is not 0-5.
    alert("I'm sorry. I don't understand your answer. Please reload the page, and enter an answer between 0 and 5.")
}
//Ask the user his meal cost.
userCost = prompt("Alright. How much did your meal cost?");

//Cast string inputs to numbers.
userCost   =   Number(userCost);
guest1Cost = Number(guest1Cost);
guest2Cost = Number(guest2Cost);
guest3Cost = Number(guest3Cost);
guest4Cost = Number(guest4Cost);
guest5Cost = Number(guest5Cost);

//Validating numbers. Removing if incorrect.
if(isNaN(guest1Cost)){
    guest1Cost = 0;
    alert("I didn't understand your answer for your first guest's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}
if(isNaN(guest2Cost)){
    guest2Cost = 0;
    alert("I didn't understand your answer for your second guest's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}
if(isNaN(guest3Cost)){
    guest3Cost = 0;
    alert("I didn't understand your answer for your third guest's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}
if(isNaN(guest4Cost)){
    guest4Cost = 0;
    alert("I didn't understand your answer for your forth guest's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}
if(isNaN(guest5Cost)){
    guest5Cost = 0;
    alert("I didn't understand your answer for your fifth guest's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}
if(isNaN(userCost)){
    userCost = 0;
    alert("I didn't understand your answer for your meal's cost. If it was more than zero, please reload this" +
    " page. If not, you're fine!")
}

//Prompt boolean.
beverages = confirm("Did your party purchase alcoholic beverages? Click Ok for yes, Cancel for no.");

//Create ternary to prompt for variable.
(beverages) ? beverageCost = prompt("How much is the cost of your party's beverages?", "Enter as a decimal." +
" (i.e. 19.20 = $19.20)") : alert("That's great! That stuff is expensive!");

//Validate ternary result.
beverageCost = Number(beverageCost);
if(isNaN(beverageCost)){
    beverageCost = 0;
}

//Create calculations.

//Calculate total cost
totalCost = (userCost + guest1Cost + guest2Cost + guest3Cost + guest4Cost + guest5Cost);
//If beverages are not equal to zero, add to totalCost. [Done this way to add "!" logical operator.
if(beverageCost !== 0){
    totalCost = (totalCost + beverageCost);
}
//Make tip fifteen percent of check.
tipCost = (totalCost * .15);

//Add totalCost and tipCost to make fullPrice variable.
fullPrice = (totalCost + tipCost);






