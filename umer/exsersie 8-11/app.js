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
let secret_number = 7;
let user_guess = +prompt("Guess the secret number (between 1 and 10)")
if (user_guess === secret_number){
    document.write("Bingo! Correct answer")
}
if (user_guess + 1 === secret_number){
    document.write("Close enough to the correct answer")
}
// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.
let divisible_3 = +prompt("📝 Please enter a number to check if it is divisible by 3: ");
if (divisible_3 % 3  ===  0){
    document.write("tis number divided by 3")
};
// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)
let team1 = prompt("Enter the score of team 1");
let team2 = prompt("Enter the score of team 2");
if(team1 < team2 ) {
    document.write("team 2 won the match")
}
if(team1 > team2 ) {
    document.write("team 1 won the match")
}
// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :
let user_string = prompt("Pleas enter a String");
let user_number = +prompt("pleas enter a number");
let user_boolean = prompt("Pleas enter (true or fales)");
document.write(user_string + " is a " + typeof user_string);
document.write(user_number + " is a " + typeof user_number);
document.write(user_boolean + " is a " + typeof user_boolean);
// 15. Write a program that checks whether the given input is an
// even number or an odd number.
let User_number_EO = prompt("📌 Please enter a number to check if it is Even or Odd:")
if (User_number_EO % 2 === 0){
    document.write("Your number is even!")
}
if (User_number_EO % 2 ==! 0){
    document.write("Your number is odd!")
}
// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let karachi_temperature = prompt("📌 Please enter the current temperature (°C) to check the weather condition:")
if(karachi_temperature >= 40 ){
    document.write("It is too hot outside.")
}if(karachi_temperature >= 30 && karachi_temperature < 40){
    document.write("The Weather today is Normal.")
}if(karachi_temperature >= 20 && karachi_temperature < 30){
    document.write("Today’s Weather is cool.")
}if(karachi_temperature >= 10 && karachi_temperature < 20){
    document.write("OMG! Today’s weather is so Cool.")
}
// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let first_number = +prompt("Enter the first number:");
let second_number = +prompt("Enter the second number:")
let Operation = prompt("Select an operation (+, -, , /, %):")
if(Operation === "+"){
    document.write(first_number + Operation + second_number + " is " + (first_number + second_number) )
}
if(Operation === "*" || Operation === "X" || Operation === "x"){
    document.write(first_number + Operation + second_number + " is " + (first_number * second_number) )
}
if(Operation === "-"){
    document.write(first_number + Operation + second_number + " is " + (first_number - second_number) )
}
if(Operation === "/"){
    document.write(first_number + Operation + second_number + " is " + (first_number / second_number) )
}
if(Operation === "%"){
    document.write(first_number + Operation + second_number + " is " + (first_number % second_number) )
}
// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.
let today = prompt("Please enter the day name:");
if (today === "Saturday" ){
    document.write("It’s weekend");
};
if (today === "Sunday" ){
    document.write("Yay! It’s a holiday")
}
if ( today === "Monday" || today === "Tuesday" || today === "Wednesday" || today === "Tursday" || today === "Friday"   ){
    document.write("It’s a week day")
}
// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”
let user_score = prompt("Pleas enter your score : ");
if (user_score > 50){
    document.write("You are passed")
}
if (user_score <= 50){
    document.write("Try again!")
}
// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
if (number1 > number2){
 document.write("The greater number of " + number1 + " and " + number2 +" is " + number1)   
}
if (number1 < number2){
    document.write("The greater number of " + number1 + " and " + number2 +" is " + number2)   
   }
if (number1 === number2){
    document.write("The numbers are equal")   
}
// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)
// Show the result to make sure it works.
let language = prompt("Please enter the language code (e.g. 'ur' for urdu , puj for punjabi, ar for arabic ,es' for Spanish, 'de' for German, 'en' for English):")
if (language === "en"){
    alert("hello world")
}
if (language === "ur"){
    alert("ہیلو دنیا")
}
if (language === "puj"){
    alert("ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ")
}
if (language === "ar"){
    alert("مرحبا بالعالم")
}
if (language === "es"){
    alert("Hola Mundo")
}
if (language === "de"){
    alert("Hallo Welt")
}
// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number
let number_whether = +prompt("Pleas enter a number");
if (number_whether > 0){
    document.write("positive number")
}
if (number_whether < 0){
    document.write("negative number")
}
if ( number_whether === 0){
    document.write("Zero")
}
// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few
let number_1 = prompt("Pleas enter a number : ");
let noun = prompt("Pleas enter a noun : ");
if (number_1 > 1){
    alert(number_1 + noun + "s")
}
if (number_1 <= 1){
    alert(number_1 + noun )
}
