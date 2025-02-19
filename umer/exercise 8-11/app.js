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
