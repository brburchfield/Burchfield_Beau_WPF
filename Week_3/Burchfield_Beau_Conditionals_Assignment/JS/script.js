/*
Beau Burchfield
3/19/2015
Conditionals Assignment
 */


//TODO: Declare variables (including array).
var userCost;
var guestNumber;
var guest1Cost;
var guest2Cost;
var guest3Cost;
var guest4Cost;
var guest5Cost;

//TODO: Assign values to variables (via prompts).
guestNumber = prompt("How many guests do you have?", "Maximum is 5.");
guestNumber = Number(guestNumber);
if(guestNumber > 5){
    alert("The maximum amount of guests you may enter is 5. Please reload the page.");
} else if(guestNumber >= 0){
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
    alert("I'm sorry. I don't understand your answer. Please reload the page, and enter an answer between 1 and 5.")
}



//TODO: Create calculations.






