// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function multi(a , b){
     let i = 0;
     ans = 1 ;   
    while (i < b){
       ans =  ans * a 
        i++
     }
return (ans)
}
const jav = multi(3 , 3)
document.write(jav)
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
let year = +prompt("Please enter a year...")
function checkleepyear(year){
  switch(true){
    case (year % 4 !== 0):
    alert("this is not a leep year *_*");
    break;
    case ( year % 100 == 0 && year % 400 !== 0):
    alert("this is not a leep year *_*");
    break;
    default:
        alert("this is a leap year 🤞")
  }
}
checkleepyear(year)

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function calculateS(a, b, c) {
  return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
  let S = calculateS(a, b, c); // Function 1 call
  let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  return area;
}
let a = +prompt("Enter side a:");
let b = +prompt("Enter side b:");
let c = +prompt("Enter side c:");
let areaResult = calculateArea(a, b, c);
alert("Area of triangle is: " + areaResult.toFixed(2));
