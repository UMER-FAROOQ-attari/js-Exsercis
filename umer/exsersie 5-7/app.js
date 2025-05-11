// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let age_1 = 13;
let age_2 = 9;
let Sum_age = age_1 + age_2;
alert("The Sum of " + age_1 + " and " + age_2 + " is " + Sum_age);
// 2. Repeat task1 for subtraction, multiplication, division & modulus. E.g
let subtraction_age = age_1 - age_2;
alert("The result of subtraction " + age_1 +" from " + age_2 + " is " + subtraction_age);
let multiplication_age = age_1 * age_2 ;
alert("The result of multiplying "+age_1+" by " +age_2 + " is "+multiplication_age);
let division_age = age_1 / age_2;
alert("The result if dividing " + age_1 + " by " + age_2 + " is approximately " + division_age);
let modulus_age = age_1 % age_2;
alert("The remainder when " + age_1 + " is divided by " + age_2 + " is "+ modulus_age)
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by 3. Output : “The remainder is : 1”
let number;
document.write("Value after variable declaration is: "+ number);
number = 3;
document.write("<br>"+ " Initial value:"+ number);
number = ++number;
document.write("<br>"+ "Value after increment is:"+number);
number = number + 7;
document.write("<br>"+ "Value after addition is:" +number);
number = --number;
document.write("<br>"+ "Value after decrement is:" + number);
number = number % 3;
document.write("<br>"+"The remainder is :"+number );
// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticket = 600;
let ticket_quantity = 5;
document.write("<br>"+"total cost to by "+ ticket_quantity +"tickets to a movie is " + ticket * ticket_quantity + "PKR");
// 5. Write a script to display multiplication table of any number in your browser. E.g.
let fairvote_number = 6;
document.write("<br>"+"4 x  1 = " +fairvote_number * 1);
document.write("<br>"+"4 x  2 = " +fairvote_number * 2);
document.write("<br>"+"4 x  3 = " +fairvote_number * 3);
document.write("<br>"+"4 x  4 = " +fairvote_number * 4);
document.write("<br>"+"4 x  5 = " +fairvote_number * 5);
document.write("<br>"+"4 x  6 = " +fairvote_number * 6);
document.write("<br>"+"4 x  7 = " +fairvote_number * 7);
document.write("<br>"+"4 x  8 = " +fairvote_number * 8);
document.write("<br>"+"4 x  9 = " +fairvote_number * 9);
document.write("<br>"+"4 x  10 = " +fairvote_number * 10);
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
let Celsius = 12;
let d_fahrenheit = (Celsius*9/5)+32;
document.write( "<br> "+Celsius +"°C is "+ d_fahrenheit + "°F");
let Fahrenheit = 68;
let d_Celsius = ((Fahrenheit - 32) * 5/3);
document.write( "<br> "+ Fahrenheit + "°F is " + d_Celsius + "°C")
// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
let price_item_1 = 560;
let price_item_2 = 200;
let quantity_item_1 = 2;
let quantity_item_2 = 5;
let Shipping_charges = 150;
let total_price = price_item_1 * quantity_item_1 + price_item_2 *quantity_item_2 + Shipping_charges;
document.write("<br> " + "<b>Shopping Cart</b>" + "<br> "   + "price of item 1 is " + price_item_1);
document.write("<br> " + "Quantity of item 1 is "+ quantity_item_1 );
document.write("<br> " + "price of item 2 is " + price_item_2);
document.write("<br> " + "Quantity of item 2 is "+ quantity_item_2);
document.write("<br> " + "Shipping charges " + Shipping_charges);
document.write("<br> " + " total cost of your order is " + total_price + "PKR");
// 8. Write a script to take total marks & marks obtained by a student. Compute the percentage & show the result in your browser
let total_marks = 1200;
let obtained_marks = 900;
let percentage = 900/1200*100;
document.write("<br> " + "<b><h1>Marks Sheet</h1></b>");
document.write("<br> " + "Total marks : " + total_marks);
document.write("<br> " + "Marks obtained : " + obtained_marks);
document.write("<br> " + "Percentage : " + percentage + "%");
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
let US_Dollar = 104;
let Saudi_Riyal = 28;
let quantity_dollar = 10;
let quantity_riyal = 25;
let total_PKR = US_Dollar * 10 + Saudi_Riyal * 25 ;
document.write("<br> " + "<b><h1>Currency in PKR</h1></b>");
document.write("Total currency in PKR :" + total_PKR);
// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression.
let number_1 = -13.3334 + 5 * 10 / 2;
// number_1 = number_1 + 5;
// number_1 = number_1 * 10;
// number_1 = number_1 / 2;
alert(number_1);
// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”. 
let current_year = 2025;
let birth_year = 2006 ;
let Age = current_year - birth_year;
let possible_age = Age - 1;
document.write("<br> " + "<b><h1>The Age Calculator</h1></b>");
document.write("<br> " + " Current year :" + current_year);
document.write("<br> " + " Birth year : " + birth_year);
document.write("<br> " + "They are either " + Age + " or " + possible_age + "year old");
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
let radius = 5;
let circumference = 2 * 3.142 * radius;
document.write( "<br> " + "The circumference is " + circumference + "<br>");
 area = 3.142 * radius * radius;
document.write("The area is " + area);
// 13. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
let a = 10;
document.write("<br> " +"The value of a is: " + a + "<br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");
// 14. What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// Explain the output at each stage:
//  --a;
//  --a - --b;
//  --a - --b + ++b;
//  --a - --b + ++b + b--;
let A = 2;
let b = 1;
document.write("<br> " + (--A));
document.write("<br> " + ((--A) - (--b)));
document.write("<br> " + ((--A) - (--b) + (++b)));
document.write("<br> " +((--A) - (--b) + (++b) + (b--)));
// 15. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
let favorite_snack = ("oreo biscuits");
let current_age = 15;
let maximum_age = 85;
let per_day_snacks = 2;
document.write("<br> " + "<b><h1>The lifetime supply Calculator</h1></b>");
document.write("<br> " + "favorite snack : " + favorite_snack);
document.write("<br> " + "current age : " + current_age);
document.write("<br> " + "Estimaated Maximum Age : "+ maximum_age );
document.write("<br> " + "Amount of snack per day : " + per_day_snacks)
document.write("<br> " + "You will be needed " + (365 * 85 * 2) + " last you until the ripe old age of 85 ")
