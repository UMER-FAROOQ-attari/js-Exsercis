// 1. Write a program that takes input a name from user & greet the user like this:
let User_name = prompt("Pleas enter your name");
alert("hi, " + User_name);
// 2. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
let User_Table = prompt("Enter a number to print its multiplication table");
if ( User_Table > 0){
document.write("Multiplication table of " + User_Table);
document.write("<br> " +"<br> " + User_Table + " X 1 = "+ User_Table *1);
document.write("<br> " + User_Table + " X 2 = "+ User_Table *2);
document.write("<br> " + User_Table + " X 3 = "+ User_Table *3);
document.write("<br> " + User_Table + " X 4 = "+ User_Table *4);
document.write("<br> " + User_Table + " X 5 = "+ User_Table *5);
document.write("<br> " + User_Table + " X 6 = "+ User_Table *6);
document.write("<br> " + User_Table + " X 7 = "+ User_Table *7);
document.write("<br> " + User_Table + " X 8 = "+ User_Table *8);
document.write("<br> " + User_Table + " X 9 = "+ User_Table *9);
document.write("<br> " + User_Table + " X 10 = "+ User_Table *10);
}
else {
    document.write("<br> " +"Multiplication table of " + User_Table);
    document.write("<br> " +"<br> " + 5 + " X 1 = "+ 5 *1);
    document.write("<br> " + 5 + " X 2 = "+ 5 *2);
    document.write("<br> " + 5 + " X 3 = "+ 5 *3);
    document.write("<br> " + 5 + " X 4 = "+ 5 *4);
    document.write("<br> " + 5 + " X 5 = "+ 5 *5);
    document.write("<br> " + 5 + " X 6 = "+ 5 *6);
    document.write("<br> " + 5 + " X 7 = "+ 5 *7);
    document.write("<br> " + 5 + " X 8 = "+ 5 *8);
    document.write("<br> " + 5 + " X 9 = "+ 5 *9);
    document.write("<br> " + 5 + " X 10 = "+5 *10);
}
// 3. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
let User_city = prompt("Pleas enter your city");
if( User_city === "karachi"){
    alert("Welcome to city of lights");
}
// 4. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
let User_gender = prompt("Pleas enter your gender (male or female) :");
if (User_gender == "male"){
    alert("Good Morning Sir.");
};
if ( User_gender == "female"){
    alert("Good Morning Ma’am.");
};
// 5. Write a program to take input color of road traffic signal from the user & show the message according to this table: Signal color Message
// red vehicles must stop
// yellow vehicles should get ready to move
// green vehicles can move now
let User_signal = prompt("Enter the color of the road traffic signal (red, yellow, green):")
if (User_signal === "red"){
    alert("vehicles must stop");
};
if (User_signal === "yellow"){
    alert("vehicles should get ready to move")
}
if(User_signal === "green"){
    alert("vehicles can move now")
}
// 6. Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome”
let User_maxage = prompt("Enter the maximum age:");
let User_currentage = prompt("Enter the current age:");
if (User_currentage <= User_maxage){
    alert("You are welcome")
}
// 7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
let User_fuel = prompt("Enter remaining fuel in your car (in litres):");
if ( User_fuel < 0.25){
    alert("Please refill the fuel in your car")
};
// 8. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }
// USER	INPUT	&	CONDITIONAL	STATEMENTS |	JAVASCRIPT
// Page	5 of	12
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }
// e. if (true){
//  alert("True");
// }
// if (false){
//  alert("False");
// }
// f. if("car" < "cat"){
//  alert("car is smaller than cat");
// }
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
if (true){
 alert("True");
}
if (false){
 alert("False");
}
if("car" < "cat"){
 alert("car is smaller than cat");
}
// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:
// Percentage % Grade Remarks
// Greater than or equal to 80 A-one Excellent
// Greater than or equal to 70 A Good
// Greater than or equal to 60 B You need to improve
// Less than 60 Fail Sorry
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
let total_marks = prompt("Pleas Enter total marks");
let obtained_marks = prompt("Pleas Enter obtained marks ");
let percentage = obtained_marks / total_marks * 100;
document.write("<br> " +"<h1>Marks Sheet </h1>")
document.write("<br> " +"<br> " +"<br> " + "Total marks : "+ total_marks);
document.write("<br> " + "Marks obtained : " + obtained_marks);
document.write("<br> " + "Percentage : " + percentage + "%");
if (percentage >= 80 ){
    document.write("<br> " + "Grade : A-one");
    document.write("<br> " + "Remarks : Excellent")
}
if (percentage >= 70 && percentage < 80 ){
    document.write("<br> " + "Grade : A");
    document.write("<br> " + "Remarks : Good")
}if (percentage >= 60 && percentage < 70 ){
    document.write("<br> " + "Grade : B");
    document.write("<br> " + "Remarks : You need to improve")
}if (percentage <= 60 ){
    document.write("<br> " + "Grade : Fail");
    document.write("<br> " + "Remarks : Sorry")
}   
// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.
let item1 = prompt("Please enter the name of the first item:");
let item1_quantity = prompt("Please enter the quantity of the first item:");
let item1_price = prompt("Please enter the price of the first item (PKR):")
let item2 = prompt("Please enter the name of the second  item");
let item2_quantity = prompt("Please enter the quantity of the second item:");
let item2_price = prompt("Please enter the price of the second item (PKR):")
let shopping_charges = 250;
let total_price = item1_price * item1_quantity + item2_price * item2_quantity + shopping_charges;
document.write("<br> " +"<h1>Shoping Cart </h1>")   
document.write("<br> " +" Price of " + item1 + " is " + item1_price );
document.write("<br> " +" Quantity of " + item1 + " is " + item1_quantity);
document.write("<br> " + "Price of " + item2 + " is " + item2_price);
document.write("<br> " +" Quantity of " + item2 + " is " + item2_quantity);
document.write("<br> " + "Shiping Charges " + shopping_charges);
document.write("<br> " +"<br> " +"<br> " + " Total cost of your oder is " + total_price  + "PKR");
document.write("<br> " + " Discount Price is " + (total_price - (total_price / 100 * 10)));
// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
