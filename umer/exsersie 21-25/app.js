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
let username = prompt("pleas Enter Your name")
let band_words = ["!",",",".","@"];
let is_valid = true;
for (i = 0 ; i< username.length ; i++){
    band_words.includes(username[i])
    is_valid = false
}
if (!is_valid){
    let username = prompt("pleas Enter Your valid name")
}
else{
    alert(" we save your  name")
}
// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example
let slect = prompt(` Pleas enter your furit item`)
let furit = ["cake", "apple pie", "cookie", "chips", "patties"];
let real = slect.toLowerCase()
let is_found = false;
for (i = 0 ; i < furit.length ; i++){
    if (real == furit[i]){
        is_found = true
    }
}
if (is_found){
    alert(`this item is available  at ${furit.indexOf(real)} in our bakery`)
} 
else{
alert(`this item is not available in our bakery`)
}
// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.
let f_1 = prompt(`enter 1st string for comparison`)
let s_2 = prompt(`enter 2nd string for comparison`)
if (f_1 > s_2){
    alert(`${f_1} is greater then ${s_2}`)
}
else if (f_1 < s_2){
    alert(`${s_2} is greater then ${f_1}`)
}
else(
    alert(`oho`)
)
// 20. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
let pas = prompt(`Enter a password in 6 leter and mix leter & number and don't start form number `)
let f1 = pas[0]
let ah = false;
let wh = false
if (pas.length < 6){
    alert(`pleas enter valid password`)
}
else if (!isNaN(f1)){
    alert(`pleas enter valid password`)
}
else{
for (i=0 ; i < pas.length ; i++){
    if  ((pas[i] >= "a" && pas[i] <= "z" || pas[i] >= "A" && pas[i] <= "Z"  )  ){
        ah = true;
    }
    else if (pas[i] >= "0" && pas[i] <= "9")
    {
        wh = true;

    }
}
}
 if (!(ah && wh)){
    alert(`pleas enter valid password`)
}
else{
    alert(`thankx`)
}
// 21. Write a program to convert the following string to an array
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser.
let nam = prompt(`enter universty name`)
let arr = nam.split("")
for (i=0 ; i<arr.length ;i++){
    document.write(`${arr[i]} <br>`)
}
// 22. Write a program to display the last character of a user input.
let wor = prompt(`enter a word`);
let las = wor.length -1;
let gas = wor.split("")
let sod  = wor[las]
document.write(sod)
// 23. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word
// “the” in given string.
let srt = ("The quick brown fox jumps over the lazy dog")
let srto = srt.toLowerCase();
let srta = srto.split(" ")
let count = 0;
for (i =0 ; i < srta.length ; i++){
    if (srta[i] == "the" ){
        count += 1
    }
}
document.write(count)
// 24. Write a program to count number of vowels & consonants in
// given string
//  var str = “Pakistan”;
let of = ("pakisatn");
let sp = of.split(" ")
let wo = ["a","e","i","o","u"]
let cont = 0;
for (i=0;i<of.length; i++){
    if (wo.includes(of[i])){
        cont += 1
    }
}
document.write(cont)