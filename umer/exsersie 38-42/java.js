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
let sten = prompt("Pleas Enter a sentrance ...")
function rmovevowels(sentence){
  sentence = sentence.toLowerCase()
  let arrtofsten = sentence.split("")
  let anserarr = []
  var i = 0;
  let vowels = ["a","e","i","o","u"]
  while(i < arrtofsten.length){
    if (!vowels.includes(arrtofsten[i])){
      anserarr.push(arrtofsten[i])
    }
    i++
  }
  
  return anserarr.join("")
}
let answer = rmovevowels(sten);
document.write(answer)
// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT
// Page 2 of 2
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
let stens = prompt("Pleas Enter a sentence . .. ");
function check2vowels(sentence){
  sentence = sentence.toLowerCase();
  let strtoary = sentence.split("");
  let i = 0;
  let vowels = ["a","e","i","o","u"]
  
  while(i < strtoary.length -1 ){
  let firstch = sentence[i];
  let secondch = sentence[i + 1];
    switch(firstch){
      case'a':
      case'e':
      case'i':
      case'o':
      case'u':
      switch(secondch){
      case'a':
      case'e':
      case'i':
      case'o':
      case'u':
     alert(`Yes vowal word is use join ....`)  
      break;
    }
      break;
    }
 i++ }
}
check2vowels(stens)
// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
let distance = +prompt("Enter the distance between two cities in kilometers 🌍 🛣️ 📏: ")
function changevalue(dist){
    let meters = dist *1000;
    let centimeters = dist * 100000;
    let feet = dist *3280.84;
    let inches = dist *  39370.1;
    document.write(`<br> <br> the distance between two cities in meters is :${meters}
   <br> <br>the distance between two cities in centimeters is :${centimeters}
   <br> <br>the distance between two cities in feet is :${feet}
   <br> <br>the distance between two cities in inches is :${inches}
      `)
}
changevalue(distance)
// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour
let overhours = +prompt("How many total hours did the employee work this week? 🧑‍💼⏳")
function checksellry(time){
  let overtime = 0;
   if (time>40){
   overtime = time - 40;
 }
 let ans   = overtime * 12;
 return(ans);
}
const jawab = checksellry(overhours);
document.write(`Overtime Pay is Rs.  : ${jawab} 🙂`)
// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer
let totalamount = +prompt("😎 کتنے پیسے نکالنے ہیں بادشاہ؟ مثال کے طور پر: 1000، 2000، 5000 — لیکن بھائی 10 کے multiple میں ہونے چاہییں! 💸");
function nots(paisa) {
  if (paisa % 10 !== 0) {
    document.write("❌ براہ کرم صرف 10 کے مضارب میں رقم درج کریں۔");
    return;
  }

  let notes1000 = Math.floor(paisa / 1000);
  paisa = paisa % 1000;

  let notes100 = Math.floor(paisa / 100);
  paisa = paisa % 100;

  let notes50 = Math.floor(paisa / 50);
  paisa = paisa % 50;

  let notes10 = Math.floor(paisa / 10);

  let totalNotes = notes1000 + notes100 + notes50 + notes10;

  document.write(`
    <h2>آپ کو ملیں گے:</h2>
    <ul>
      <li>💵 ${notes1000} ہزار کے نوٹ</li>
      <li>💵 ${notes100} سو کے نوٹ</li>
      <li>💵 ${notes50} پچاس کے نوٹ</li>
      <li>💵 ${notes10} دس کے نوٹ</li>
    </ul>
    <h3>کل نوٹوں کی تعداد: ${totalNotes}</h3>
    <p>شکریہ! آپ کا دن خوشگوار گزرے۔ 😊</p>
  `);
}

nots(totalamount);
