// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
let number = +prompt("Pleas enter a number ");
if(number % 3 !== 0){
    document.write("Number is not divisible by 3")
}
else{
    document.write("Number is divisible by 3")
}
// 2. Write a program that checks whether the given input is an even
// number or an odd number.
let number_2 = +prompt("Pleas enter a number : ");
if (number_2 % 2 === 0){
    document.write("<br>"+"this number is even : ")
}
else {
    document.write("<br>"+ "This number is odd")
}
// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
let age = +prompt("Pleas enter your age : ");
if ( age >= 18){
    document.write("<br>"+" Old enough")
}
else if (age < 18){
    document.write("<br>"+"Too young");
}
// 4. Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.
let user_name = prompt("Pleas enter your name : ")
if (user_name === "saqib rases"){
    document.write("<br>"+"oh tera name bi saltnat wala hy")
}
else{
    document.write("<br>"+"tu Khush naseeb nhi hy")
 }
// 5. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”
let number_1 = +prompt("Pleas enter a number ");
if(number % 3 !== 0){
    document.write("Number is not divisible by 3")
}
else{
    document.write("Number is divisible by 3")
}
// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)
let input = prompt("Please enter a character:")
let ascci_code = input.charCodeAt(0);
if(ascci_code >=65 && ascci_code <=90){
    document.write(input + "is an uppercase letter.")
} 
else if(ascci_code >=97 && ascci_code <=122){
    document.write(input+"is a lowercase letter.")
}
else if (ascci_code >= 48 && ascci_code <= 57){
     document.write(input+ "is a Number.")
}
else{
    document.write(input + "is neither a number nor a letter.")
}

// 7. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)
let first_number = +prompt("Enter the first number:");
let second_number = +prompt("Enter the second number:")
let Operation = prompt("Select an operation (+, -, , /, %):")
if(Operation === "+"){
    document.write(first_number + Operation + second_number + " is " + (first_number + second_number) )
}
else if(Operation === "*" || Operation === "X" || Operation === "x"){
    document.write(first_number + Operation + second_number + " is " + (first_number * second_number) )
}
else if(Operation === "-"){
    document.write(first_number + Operation + second_number + " is " + (first_number - second_number) )
}
else if(Operation === "/"){
    document.write(first_number + Operation + second_number + " is " + (first_number / second_number) )
}
else if(Operation === "%"){
    document.write(first_number + Operation + second_number + " is " + (first_number % second_number) )
}
// 8. Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements
let time = +prompt("Please enter the time in 24-hour format (e.g., 1900 for 7 PM, 1500 for 3 PM):")
if (time >= 0 && time < 1200){
    document.write("good morning")
}
else if (time >=1200 && time < 1700){
    document.write("good afternoon")
}
else if (time >= 1700 && time < 2100){
    document.write("good evening")
}
else if (time >= 2100 && time < 2359){
    document.write("good night")
}
// 9. Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not
let year = +prompt("Please enter a year (YYYY format) to check if it is a leap year or not:")
if (year % 4 === 0 ){
    document.write("it is a leap year.")
}
else{
    document.write("it is not a leap year.")
}
// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.
let password = ("P@ssw0rd")
let user_password = prompt("Please enter your password:")
if  (!user_password) {
    document.write("Please enter your password:")
}
else if (password === user_password){
    document.write("Correct! The password you entered matches the original password")
}
else{
    document.write("Incorrect password")
}
// 11. Write a program that adds an else statement to the following
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }
let firstName = prompt("Enter your name : ");
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
}
else {
    document.write("You are not Fahad")
}
// 12. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  }
let hour = +prompt("Please enter the time hour ");
if(!hour){
    document.write("Please enter the time hour ")
}
else if (hour < 18) {
    document.write("Good day")}
else {
    document.write("Good evening")
    } 
//     13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
if ((!number1 || !number2) || (!number1 && !number2) ){
    document.write("Enter the  number")
}
else if (number1 > number2){
 document.write("The greater number of " + number1 + " and " + number2 +" is " + number1)   
}
else if (number1 < number2){
    document.write("The greater number of " + number1 + " and " + number2 +" is " + number2)   
   }
else if (number1 === number2){
    document.write("The numbers are equal")   
}
// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.
let number_whether = +prompt("Pleas enter a number");
if (number_whether > 0){
    document.write("positive number")
}
else if (number_whether < 0){
    document.write("negative number")
}
else if ( number_whether === 0){
    document.write("Zero")
}
// 15. Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)
let hour_1 = +prompt("Please enter the current hour in 24-hour format (e.g., 14 for 2 PM):")
if (!hour_1){
    document.write("Please enter the current hour in 24-hour format (e.g., 14 for 2 PM):")
}
else if(hour_1 >= 6 && hour_1<9){
    document.write("Breakfast is served.")
}
else if(hour_1 >= 11 && hour_1<13){
    document.write("Time for lunch.")
}
else if(hour_1 >= 17 && hour_1<20){
    document.write("It's dinner time.")
}
else {
    document.write("Sorry, you'll have to wait, or go get a snack.")
}
// 16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”
let value = prompt("Enter any value to check its data type:");
if ( value === "true" || value === "false"){
    document.write("This is boolean")
}
else if ( value >= 0 || value < 0){
    document.write("This is number")
}
else if ( typeof value === "string"){
    document.write("This is string")
}
// 17. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.
let character = prompt("Please write an English letter and identify whether it is one of each vowel form.")
if(character === "A" || character === "E" || character === "I" || character === "O" || character === "U" || character === "a" || character === "e" || character === "i" || character === "o" || character === "u" ){
    document.write(true)
}
else {
    document.write(false)
}
// 18. Choose the correct comparison operator to display "true",
// when:
// 10 is NOT equal to 8.
// /* is ka answer ye hy */!=
// 19. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:
let month = prompt("give me number of month"); 
if (month == 1) { alert("January"); 
} 
else if (month == 2) { alert("February"); 
} 
else if (month == 3) { alert("March"); 
} 
else if (month == 4) { alert("April"); 
} 
else if (month= 5) { alert("May"); 
} 
else if (month==6) { alert("June"); 
} 
else if (month== 7) { alert("July"); 
} 
else if (month== 8) { alert("August"); 
} 
else if (month == 9) { alert("September"); 
} 
else if (month == 10) { alert("October"); 
} 
else if (month == 11) { alert("November"); 
} 
else if (month== 12) { alert("December"); 
} 
else{ 
alert("Invalid month"); }
// 20. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".
let age = +prompt("Pleas enter your age : ");
if ( age >= 18){
    document.write("<br>"+" Old enough")
}
else if (age < 18){
    document.write("<br>"+"Too young");
}
