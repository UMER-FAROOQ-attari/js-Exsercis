// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.
let first_name = prompt("Enter your first name");
let last_name = prompt("Enter your last name");
let ful_name = first_name+last_name;
alert("Slam "+ ful_name)
// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
let infor = prompt("pleas tell your favorite mobile phone model.")
document.write(`your favorit phone is : ${infor}<br> lenth of string :${infor.length} `)
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.
let strings = prompt("write a string ")
let ind = prompt(" who leter in this string you find first index number")
document.write(`<br>string : ${strings} <br> index of '${ind}' is : ${strings.indexOf(ind)}`)
// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.
let str = prompt("write 2nd strig ")
let indx = prompt(" who leter in this string you find last index number")
document.write(`<br> string :  ${str} <br> last index of ${indx} : ${str.lastIndexOf(indx)}`) 
// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.
let stra = prompt("write 3rd strig ")
let indi = prompt(" who index number in this string you find leter")
document.write(`<br> string :  ${stra} <br> last index of ${indi} : ${stra.charAt(indi)}`) 
// 6. Repeat Q1 using string concat() method.
let first_nam = prompt("Enter your first name");
let last_nam = prompt("Enter your last name");
let ful_nam = first_nam+last_nam;
alert("Slam "+ ful_nam)
// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
let city_1 = ("hyderabad")
let city_2 = ("Faisal")
document.write(` <br> city : ${city_1} <br> After replacment : ${city_1.replace("hyder", city_2)}`)
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
let message = (`<br><b> message </b> <br> Ali and Sami are best friends. They play cricket and football together.`)
document.write("<br>"+message)
let messag = message.replace(/ and /g,"&")
document.write(messag)
// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
let sto = ("472")

let new_stor =sto.replace("472",472)
let new_sto = Number(new_stor)
document.write(`<br> Value : ${sto} <br> type : ${typeof(sto)} <br> Value : ${new_sto} <br> type : ${typeof(new_sto)}`)
// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.
let URo = prompt("write a URL ")
let dom = URo.slice(3,(URo.length))
document.write(`<br>URL :${URo} <br> Domain : ${dom}`) 
// 11. Write a program that takes user input. Convert and show the
// input in capital letters.
let word = prompt(`enter a world is small letter`)
let cap_word = word.toUpperCase()
document.write(`
   <br> User input : ${word}
    <br> Upper case : ${cap_word}`)
// 12. Write a program that takes user input. Convert and show the
// input in small letters.
let wordu = prompt(`enter a world in upper case`)
let sammll = wordu.toLowerCase()
document.write(` <br>User input : ${wordu}
    <br>Lower case : ${sammll} `)
// 13. Write a program that takes user input. Convert and show the
// input in title case.
let title_case = prompt(`enter a world in title case`)
let first_w = title_case.slice(0,1)
let remain_w = title_case.slice(1)
let first_wo = first_w.toUpperCase()
let remain_wo = remain_w.toLowerCase()
document.write(` <br> User input : ${title_case} 
    <br> Tiltle case : ${first_wo+remain_wo} `)
// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
let numb = 35.36;
let gum = numb.toString().replace(".","")
document.write(`<br>number : ${numb}
    <br> Result : ${gum}`)
// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?
let a = "3" ;
let b = "3" ;
let a_b = a + b;
document.write(`<br> a is : ${a}
    <br> b is : ${b}
    <br>a + b is ${a_b} `)
// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?
//  y = a - b;
let ayb = a-b;
document.write(`<br> a is : ${a} 
    <br> b is : ${b}
    <br> a - b is ${ayb}`)
//     17. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among
// [@ . , !], prompt the user to enter a valid username. For
// character codes of [@ . , !], refer to ASCII table at the end of
// this document.
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
let username = prompt("Enter Your name")
for (i = 0 ; i < username.length ; i++){
    if (username[i] == "!"   ||  username[i] == "," || username[i] == "."   || username[i] == "@" ){
        let username    = prompt("pleas Enter Your vailed name")
    }
}