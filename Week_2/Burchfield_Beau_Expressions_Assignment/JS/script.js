/*
Beau Burchfield
3/11/2015
Expressions Assignment
 */

//Extra Funds Calculator

//Declare weekly income.
var weeklyIncome;
//Declare monthly bills variable.
var monthlyBills;
//Declare yearly donations variable.
var charityYear;
//Declare extra funds variable.
var totalExtra;





//Create original welcome string.
alert("Hello! Let's calculate your extra funds!");

//Request weekly income.
weeklyIncome = prompt("Please enter your net weekly income.");
//Request monthly bills.
monthlyBills = prompt("Please enter your monthly total bills (including gas, groceries, etc).");
//Inquire as to whether user donates money to charity.
charityBoolean = confirm("Do you donate any money to charity?");

//If yes, prompt for yearly donation amount.
if( charityBoolean == true ) {charityYear = prompt("Please enter average yearly charity donations.")}


//Convert weekly income to yearly. Assign result to variable.
var incomeYear = weeklyIncome * 52;
//Convert monthly bills to yearly. Assign result to variable.
var billsYear = monthlyBills * 12;
//Calculate yearly income, minus yearly bills and donations. Assign result to variable.
var totalExtra = incomeYear - billsYear;
if( charityBoolean == true ) {totalExtra = totalExtra - charityYear }

//Print total extra funds to console.

//Display totalExtra to user.
