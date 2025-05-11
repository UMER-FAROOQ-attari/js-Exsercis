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