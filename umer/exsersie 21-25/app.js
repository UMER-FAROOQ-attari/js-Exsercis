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