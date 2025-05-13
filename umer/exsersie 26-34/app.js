// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 
let dnumb = +prompt("write a decimal number ")
document.write(`number : ${dnumb} <br> round of number : ${Math.round(dnumb)} <br> floor valu : ${Math.floor(dnumb)} <br> ceil number : ${Math.ceil(dnumb)} `)
// 2. Write a program that takes a negative integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
let nnumb = +prompt(`enter a negative  number `)
document.write(`<br> number : ${nnumb} <br> round of number : ${Math.round(nnumb)} <br> floor valu : ${Math.floor(nnumb)} <br> ceil number : ${Math.ceil(nnumb)} `)
// 3. Write a program that takes a positive floating point number
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
let flonumb = +prompt("enter a floating point number")
document.write(`<br> number : ${flonumb} <br> round of number : ${Math.round(flonumb)} <br> floor valu : ${Math.floor(flonumb)} <br> ceil number : ${Math.ceil(flonumb)} `)
// 4. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
let fnnumb = +prompt("write a negative decimal number ")
document.write(`<br>number : ${fnnumb} <br> round of number : ${Math.round(fnnumb)} <br> floor valu : ${Math.floor(fnnumb)} <br> ceil number : ${Math.ceil(fnnumb)} `)
// 5. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
let aval = +prompt(`pleas enter a number for convert absolute value`)
document.write(`the absolute value of ${aval} is ${Math.abs(aval)}`)
// 6. Write a program that simulates a dice using random() method
// of JS Math class. Display the value of dice in your browser.
let rnumber = (Math.random() * 6) ;
rnumber = Math.round(rnumber)
document.write(`<br>${rnumber} <br> `);
// 7. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.
let htnmb = (Math.random() * 2);
htnmb = (Math.ceil(htnmb))
if (htnmb === 1){
    document.write("head")
}
if (htnmb === 2 ){
    document.write("tail")
}
// 8. Write a program that shows a random number between 1 and
// 100 in your browser.
let numb100 = (Math.random() * 99) + 1;
numb100 = Math.round(numb100);
document.write(`<br> random number between 1 to 100 is : ${numb100}` )
//     9. Write a program that asks the user about his weight. Parse the
// user input and display his weight in your browser. Possible user
// inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
    let kg = prompt(`pleas enter your weight`);
    kg = parseFloat(kg);
    alert(kg)
// 10. Write a program that stores a random secret number from 1
// to 10 in a variable. Ask the user to input a number between 1
// and 10. If the user input equals the secret number, congratulate
// the user.
let rnmbnumb = (Math.random() * 10)+1;
rnmbnumb = Math.round(rnmbnumb);
let pnumber = +prompt(`pleas enter a number between 1 to 10`)
if (rnmbnumb == pnumber){
    alert(`correct  answer`)
} 
else{
    alert(`worng answer`)
}
// 11. Write a program that displays current date and time in your
// browser.
let td = new Date();
alert(td)
// 12. Write a program that alerts the current month in words. For
// example December.
let tdo = new Date();
tdo = tdo.getMonth();
let month =["jan", "feb" , "mar", "april","may" , "jun" , "jul"]
alert(month[tdo])
// 13. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.
let day_to = new Date();
day_to = day_to.getDay();
let days = ["sun","mon","tus","wed" , "tur", "fri","sat"]
alert(days[day_to])
// 14. Write a program that displays a message “It’s Fun day” if its
// Saturday or Sunday today.
let day_f = new Date();
day_f = day_f.getDay;
if ( day_f == 0 || 6){
    alert(`It’s Fun day” if its Saturday or Sunday today`)
}
// 15. Write a program that shows the message “First fifteen days of the
// month” if the date is less than 16th of the month else shows “Last
// days of the month”.
let date_mon  = new Date()
date_mon = date_mon.getDay()
if (date_mon <= 15) {
    alert("First fifteen days of the month")
}
else if (date_mon >= 16){
    alert("Last days of the month")
}
// 16. Write a program that determines the minutes since midnight, Jan.
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object.
let c_date = new Date();
let c_second = c_date.getTime();
let c_mint = c_second/1000/60;
console.log(`Current Date :${c_date} <br> Elaped millisecond since jun 1, 1970 ${c_second}<br>Elaped mint since jun 1, 1970 ${c_mint}`)
// 17. Write a program that tests whether it's before noon and alert “Its
// AM” else “its PM”.
let am_pm = new Date();
am_pm = am_pm.getHours()
if(am_pm <= 11 ){
    alert(`AM`)
}
else if ( am_pm >= 12){
    alert(`PM`)
}
// 18. Write a program that creates a Date object for the last day of the
// last month of 2020 and assigns it to variable named laterDate
let s_date = new Date("July 04, 2025");
alert(s_date);
// 19. Create a date object of the starting date of this Ramadan and alert
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
let ramd_day = new Date("June 18, 2015");
ramd_day = ramd_day.getTime();
let right_now = new Date();
right_now = right_now.getTime();
let rem_day = right_now -ramd_day ;
rem_day = rem_day/1000/60/60/24;
rem_day = Math.round(rem_day)
alert(`${rem_day} days have passed since 1st Ramdan , 2015`);
// 20. Write a program that displays in your browser the seconds that
// elapsed between the reference date and the beginning of 2015.
let today_time = new Date();
let baqi_time = new Date("January 01, 2025");
baqi_time = baqi_time.getTime();
let tod_sec = today_time.getTime();
let baq_time = tod_sec - baqi_time;
console.log(`On reference date ${today_time}, <br> ${baq_time} seconds had passed sice beginning 0f 2025 `)
// 21. Create a Date object for the current date and time. Extract the
// hours, reset the date object an hour ahead and finally display the
// date object in your browser.
let abi_time = new Date();
let ikganta = new Date(abi_time)
ikganta.setHours(ikganta.getHours() - 1 )
console.log(`Current date : ${abi_time} <br> 1 hours ago, its was ${ikganta}`);
// 22. Write a program that creates a date object and show the date
// in an alert box that is reset to 100 years back?
let abi = new Date();
let soo = new Date(abi)
soo.setFullYear(soo.getFullYear ()- 100);
alert(soo)
// 23. Write a program to ask the user about his age. Calculate and
// show his birth year in your browser.
let age = +prompt(` write  your age `);
let nedate = new Date();
nedate = nedate.getFullYear();
let answer = nedate - age;
alert(answer)
// 24. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 decimal
// places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
let cus_name = prompt(`pleas enter your nme`)
let mont = new Date();
mont = mont.getMonth();
let ary = ["jan", "feb", "march","april","may","june"]
let nmb_unit = +prompt(`pleas enter number of units`);
let char_per_unit = +prompt(`pleas enter charges per unit`);
let nap = nmb_unit * char_per_unit ;
let lps = 500;
let gap = nap + lps;
document.write(`custmer name : ${cus_name} <br> Month : ${ary[mont]} <br> Number of Unit : ${nmb_unit}<br> charges per Unit ${char_per_unit} <br>net amount payable : ${nap}<br> late payment surechge : ${lps} <br> Gross Amount payable : ${gap}`)
