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
userCost   = Number(userCost);
guest1Cost = Number(guest1Cost);
guest2Cost = Number(guest2Cost);
guest3Cost = Number(guest3Cost);
guest4Cost = Number(guest4Cost);
guest5Cost = Number(guest5Cost);


//TODO: Create calculations.






