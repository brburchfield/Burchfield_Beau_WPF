/*
Beau Burchfield
3/19/2015
Conditionals Assignment
 */


//Declare variables (including array).
//user's cost for meal
var userCost;
//how many guests user has
var guestNumber;
//guest number 1's cost of meal
var guest1Cost;
//guest number 2's cost of meal
var guest2Cost;
//guest number 3's cost of meal
var guest3Cost;
//guest number 4's cost of meal
var guest4Cost;
//guest number 5's cost of meal
var guest5Cost;
//beverages boolean
var beverages;
//cost of beverages
var beverageCost;
//total cost of meals, before tip
var totalCost;
//cost of tip
var tipCost;
//cost of meal, with tip
var fullPrice;


//Assign values to variables (via prompts).
guestNumber = prompt("You're on your way to a special dinner! How many guests do you have?", "Maximum is 5.");

//Cast string input to number.
guestNumber = Number(guestNumber);

//begin if statements to determine how many guests to ask about.
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
}
if(isNaN(guest2Cost)){
    guest2Cost = 0;
}
if(isNaN(guest3Cost)){
    guest3Cost = 0;
}
if(isNaN(guest4Cost)){
    guest4Cost = 0;
}
if(isNaN(guest5Cost)){
    guest5Cost =0;
}
if(isNaN(userCost)){
    userCost = 0;
}

//Prompt boolean.
beverages = confirm("Did your party purchase alcoholic beverages? Click Ok for yes, Cancel for no.");

//Create ternary to prompt for variable.
(beverages) ? beverageCost = prompt("How much is the cost of your party's beverages?", "Enter as a decimal." +
" (i.e. 19.20 = $19.20)") : alert("That's great! That stuff is expensive!");


//cast beverageCost to number.
beverageCost = Number(beverageCost);
//Validate ternary result.
if(isNaN(beverageCost)){
    beverageCost = 0;
}

//Create calculations.

//Calculate total cost
totalCost = (userCost + guest1Cost + guest2Cost + guest3Cost + guest4Cost + guest5Cost);
//If beverages are not equal to zero, add to totalCost. [Done this way to add "!" logical operator.]
if(beverageCost !== 0){
    totalCost = (totalCost + beverageCost);
}
//Make tip fifteen percent of check.
tipCost = (totalCost * .15);

//Add totalCost and tipCost to make fullPrice variable.
fullPrice = (totalCost + tipCost);

//Output results.
//Output total cost without tip.
console.log("The total cost of the meal is $" + totalCost + ".");
//Output tip cost.
console.log("A 15% tip would be $" + tipCost + ".");
//Output total cost with tip.
console.log("The full cost of the meal, with tip, is $" + fullPrice + ".");
