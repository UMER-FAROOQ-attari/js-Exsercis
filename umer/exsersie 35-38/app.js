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