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
// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction
let english = +prompt("Pleas enter your english number . . .");
let math = +prompt("Pleas enter your math number . . .");
let fiqh = +prompt("Pleas enter your fiqh number . . .");
function main(){
    let total = english + math + fiqh;
    
    

    function average( a ,b , c){
    let average = (a+ b+c)/3;
    return(average)  
    }
    function percentage(nume){
   return  ( nume / 300) * 100
    }
    document.write(`<br><br>Your english Number is :${english}`)
    document.write(`<br>Your math Number is :${math}`)
    document.write(`<br>Your fiqh Number is :${fiqh}`)
    document.write(`<br><br>Your Numbers averge is :${average(english, math , fiqh).toFixed(2)}`)

    document.write(`<br>Your  persentage is :${percentage(total).toFixed(2)}`)
  
    }


main()
// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
let astring = prompt("Enter a string (e.g. banana):").toLowerCase();
let wordsearch = prompt("Enter a letter to find index:").toLowerCase();

function indexnumber(word) {
  let indexnumb = -1;   
  let arrystring = astring.split("");
  let i = 0;

  while(i < arrystring.length){
    switch(arrystring[i]){
      case word:
        indexnumb = i;
        return indexnumb;  // Match milte hi return
    }
    i++;
  }

  return indexnumb; // agar match na mile to -1
}

let anse = indexnumber(wordsearch);
document.write(`Index of '${wordsearch}' is: ${anse}`);
// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
