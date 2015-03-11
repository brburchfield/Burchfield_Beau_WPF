/*
 Beau Burchfield
 3/10/15
 Expression Worksheet
 */


// ~~~Dog Years~~~

//Declaring variable and constant
var  sparkysAge;
const  dogYears =7;

//Assigning value to variable
sparkysAge = 9;

//Creating calculation (Sparky's age multiplied by dog years' value) and assigning to sparkysDogAge variable.
var sparkysDogAge = sparkysAge * dogYears;


//print out the output of Sparky's age in dog years (sparkysDogAge) to console.
console.log ("Sparky is " + sparkysAge + " human years old which is " + sparkysDogAge + " in dog years.");










// ~~~Slice of Pie, Pt. 1~~~

//Declaring variables

//Number of slices per pizza
var pizzaSlice = 8;
//Number of people at the party
var partyPeople = 19;
//Number of pizzas ordered.
var pizzasOrdered = 3;
var slicesTotal;

//Creating calculation for total number of pizza slices (number of slices per pizza times the number of pizzas)
slicesTotal = pizzaSlice * pizzasOrdered;

//Creating calculation for how many slices per person () and assigning slicePerPerson variable.
var slicePerPerson = slicesTotal / partyPeople;

//print out the output of total slices per person (slicePerPerson) to console.
console.log("Each person ate " + slicePerPerson + " slices of pizza at the party.");










// ~~~Slice of Pie, Pt. 2~~~

//Creating calculation for how many slices left over (slicesLeft) for Sparky
var slicesLeft = slicesTotal % partyPeople;

//print out the output of total slices left over (slicesLeft) for Sparky
console.log("Sparky got " + slicesLeft + " slices of pizza at the party.");













// ~~~Average Shopping Bill~~~

//Create variable array
var totals = [117.92, 96.44, 115.05, 102.28, 83.90];

// Calculate sum of variables in array
var overallTotal = (totals[0] + totals[1] + totals[2] + totals[3] + totals[4]);

//Calculate average of variables in array (overallTotal / 5) and assign  averageCost variable
var averageCost = overallTotal / 5;

//print out the output of the total cost (overallTotal) and the average value (averageCost) of grocery bills
console.log("You have spent a total of $" + overallTotal + " on groceries over 5 weeks." +
" That is an average of $" + averageCost + " per week.");










// ~~~Discounts~~~

//Declaring variables and assigning values.

//Original price
var originalPrice =17.99;
//Discount percentage
var discountPercent = 15;
//Description of item
var itemName = "Tardis replica";
//Sales tax percentage
var salesTax = 9;


//Calculate discounted price of item and assign priceWithDiscount variable
var priceBeforeTax = originalPrice - (originalPrice * (discountPercent / 100));

//Calculate sum of discountedPrice before tax and salesTax percentage (salesTax / 100) and assign priceAfterTax variable
var priceAfterTax = priceBeforeTax + (priceBeforeTax * (salesTax / 100));

/*
print out the output of description of item (itemName), discount percentage (discountPercent), discounted price
before tax (priceBeforeTax), and discounted price after tax (priceAfterTax).
*/
console.log("Your " + itemName + " was originally $" + originalPrice + ", but after a " + discountPercent +
"% discount, it is now $" + priceBeforeTax + " without tax, and $" + priceAfterTax + " with tax.");