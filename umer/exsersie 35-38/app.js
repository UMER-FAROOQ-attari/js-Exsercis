// 1.	Create a block of code that you can use several times. 
function greet(){
    alert(`welcome at this site`)
};
greet()
// 2.	Write a function that displays current date & time in your browser.
function time(){
    alert(new Date)
}
time()
// 3.	Write a function that takes first & last name and then it greets the user using his full name.
let first_name = prompt(`write your first name`);
let last_name = prompt(`write your last name`);
function greet_name(first,last){
      alert(`slam, ${first}  ${last}`)
    }
greet_name(first_name, last_name)
// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function sum (){
    let the_sum = 2+2;
    return the_sum
}
let the_sum = sum()
alert(the_sum)
// 5.	 Calculator: 
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
let numb_1 = +prompt(`pleas enter first number for calculation`);
let numb_2 = +prompt(`pleas enter second number for calculation`);
let oprtr = prompt(`enter a oprator for claculation`);
function Calculator( num1, num2 , oprator){
    var total = 0;
    if(oprtr == "+"){
        total = num1  + num2 
    }
    if(oprtr == "-"){
        total = num1  - num2 
    }
    if(oprtr == "*"){
        total = num1  * num2 
    }
    if(oprtr == "/"){
        total = num1  / num2 
    }
    console.log(` the ${numb_1} ${oprtr} ${numb_2} is ${total} `)
   return total
}
const result = Calculator(numb_1, numb_2 , oprtr);
console.log(result)
// 6. Write a function that squares its argument.
let a_numb = +prompt(`enter a number for square`)
function squares(diget){
    sqr = 0;
    sqr =diget * diget;
    return sqr
}
const rslt = squares(a_numb);
console.log(rslt)
// 7. Write a function that computes factorial of a number. 
let fac_numb = +prompt(`pleas enter a number for factor`);
function factorial(number){
    let total = 1;
    for(let i = 1 ; i<=number; i++){
      total = total * i;
    }
    return total
}
const answer = factorial(fac_numb);
console.log(answer)
// 8. Write a function that take start and end number as inputs &
// display counting in your browser.
let str_numb = +prompt(`pleas enter starting number`);
let last_numb = +prompt(`pleas enter last number`);
function counting(first_number, last_number ){
    let arry = [];
    for (let i = first_number; i <= last_number ;i++){
        arry.push(i)
    }
    return arry
}
const jawab = counting(str_numb, last_numb);
console.log(jawab.join(" "))
// 9. Write a nested function that computes hypotenuse of a right
// angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// 10. Write a function that writes variable length arguments list in
// your browser.
function list(...numbers){
    console.log(numbers)
}
list(13,2 , 4);
// 11. Write a function that accepts any number of arguments &
// find largest of the number.
    function largest(...number){
            let bara = 0;  
        for(let i = 0; i<number.length;i++){
            if(number[i] > bara){
            bara = number[i]
            }
        }
        return bara
    }
    const jawa = largest(2,6,7,3,7,4,5,2,5,9) ;
    console.log(jawa)
//     12. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a. Arguments as values
// b. Arguments as variables
function tarteeb(...word){
    let kia = word.sort()
  return kia
}
const wah = tarteeb(2,9,7,0,6,5,1,4,8,3)
console.log(wah)
// 14. Write a function that takes numbers array, sums its elements
// & returns the sum.
function sum(...cap){
    let answer = 0;
    for(let i=0;i<cap.length;i++){
     answer = answer + cap[i]
    }
    return answer
}
const kren = sum(2,9,7,0,6,5,1,4,8,3);
console.log(kren)
// 15. Execute & monitor the output of following JS program:
// var param = function inner() {
//  return typeof inner;
// }
// alert(param());
let new_style = function nafs(){
    return typeof nafs
} 
alert(new_style(5))
// 16. Write a function that computes power of a number. E.g. 23
// is 8. 
let number_of_power = +prompt(`Enter a number`)
let power_of_number = +prompt(`Enter power of the number`);
function for_power(number,power){
    let answer = 1;
    for(let i=1; i<=power ; i++){
        answer = number * answer;
    }
    return answer
}
const al_jawab = for_power(number_of_power,power_of_number);
console.log(al_jawab)
// 17. Write a function that simulates a dice & returns a random
// dice value. 
function dice(){
      let number = Math.random();
      number = (number * 6) + 1;
      number = Math.floor(number);
    return number
    }
const dana = dice();
console.log(dana)
// 18. Write a JavaScript function that reverse a number.
// Example x = 32243;
// EXPECTED OUTPUT : 34223 
function reverse(number){
    let arry = [];
    number = number.toString()
    for(let i =0; i<number.length ; i++){
       arry.push(number[i])
    }
      arry.reverse()
    arry = arry.join("")
    return arry
}
const ulti = reverse(123456789);
console.log(ulti);
// 19. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same
// backward as forward, e.g., madam.
let palindrome_num = prompt(`enter a word for check is a palindrom number or not`)
function palindrome_check(word){
    let arry =[];
    for (let i =0 ;i<word.length;i++){
        arry.push(word[i])
    }
    let revers_word = arry.reverse();
    revers_word = revers_word.join('')
    if( word === revers_word){
        console.log(`yes its realy palindrome number`);
    }
    else{
        console.log(`sorry its not palondrome number`)
    }
}
palindrome_check(palindrome_num)

// 20.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox' 
// EXPECTED OUTPUT : 'The Quick Brown Fox'
let sentance = prompt("enter a sentance for Cap")
function lowertocaps(){
    words = sentance.split(" ");
     let cptlword = []
      for (let i = 0;i< words.length ; i++){
        let word = words[i];
        let capword = word[0].toUpperCase() + word.slice(1)
        cptlword.push(capword);


      }
      let answe = cptlword.join(" ")
     return (answe)
}
let stn_answer = lowertocaps();
console.log(stn_answer)

// 21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial' 
// EXPECTED OUTPUT : 'Development'

let check_largword = prompt("pleas  a sentence for check who word is capital");
function check_word (){
          let words =   check_largword.split(" ");
          let long_word = "";
          for(let i = 0 ; i < words.length; i++ ){
            if (words[i].length > long_word.length ){
                long_word = words[i]
            
            }
          }
  return (long_word)
        }
        const answer_long_word = check_word();
        console.log(answer_long_word);
        
// 22.	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

// EXAMPLE STRING : 'The quick brown fox' 
// EXPECTED OUTPUT : 5

let vowels_words = prompt("pleas enter a sentane for count vowels letters")
function count_vowels (){
    
    let words = vowels_words.split("")
    let total_words = 0;
    for(let i = 0 ; i<words.length;i++){
     if (words[i] == "a" ||words[i] == "i" ||words[i] == "e" || words[i] == "o" ||words[i] == "u"){
     total_words++;
    }
     }
     return(total_words)
}
let anser_vowels =count_vowels();
console.log(anser_vowels)

// 23.	Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
let type_input = prompt("enter a input for check type");
function type(){
    let type_word ;
  if(type_input == "true" || type_input == "false")     {
   type_word = "Boolen"
  }
  else if(!isNaN(type_input)){
   type_word = "Number"
  }
  else{
   type_word = typeof(type_input)
  }
  return type_word

}
const type_answer = type();
console.log(type_answer);
// 24.	Write a JavaScript function to extract unique characters from a string. 
// EXAMPLE STRING : "thequickbrownfoxjumpsoverthelazydog"
// EXPECTED OUTPUT : "thequickbrownfxjmpsvlazydg"
    let a_sentence = "my name is umer"
    function repet(){
        word = a_sentence.split("")
        let newstan = [] ;
        for(i=0;i<word.length;i++){
            if(!newstan.includes(word[i])){
            newstan.push(word[i])
            }
        }
       
        return newstan.join("")
    }
    let answer_repet = repet();
    console.log(answer_repet)
