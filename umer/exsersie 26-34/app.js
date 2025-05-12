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
