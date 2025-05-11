// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop
for (let a = 1; a<=5;a++){
    document.write("<br>"+ " hello world")
}
// 2. Write a program to print numeric counting from 1 to 10.
for ( let a=1; a<=10;a++){
    document.write("<br>"+ a )
}
// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.
let number_table = +prompt("Pleas enter a number to print its multiplication on table");
let table_lenth = +prompt("Pleas enter lenth of multiplcation table");
for (let a =1 ; a<= table_lenth ; a++){
    document.write("<br>"+ number_table+" X " + a + " = " + (number_table*a))
}
// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.
let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (let a = 0 ; a < A.length; a++) {
    document.write(" <br  />" + A[a] +" <br  />")
 }
// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;
for (let a = 0 ; a < fruits.length ; a++){
    document.write("<br>" + fruits[a]+"<br>")
}
for (let a = 0 ; a < fruits.length ; a++){
    document.write("<br>" + "Element at index " + a + " is " + fruits[a] +"<br>" )
}
// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user
let number_items = +prompt("Pleas enter number of items ");
let items = []
for (let a = 0 ; a < number_items ; a++ ){
    items[a] = prompt("Pleas enter for index " + a )
} 
document.write("<br>"+ "Number of item is " + number_items + "<br>");
for(let a = 0 ; a <items.length; a++ ){
    document.write("<br>"+ items[a] + "<br>" )
}
// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
for (let i = 0 ; i < 16 ; i++){
    document.write(i)
}
for (let i = 15 ; i > 0 ; i--){
    document.write(i)
}
for ( let i = 0 ; i <= 20 ; i +=2){
    document.write(i)
}
for ( let i = 1 ; i < 20 ; i += 2 ){
    document.write(i)
}
for ( let i = 2 ; i <= 20 ; i +=2  ){
    document.write(i + "k")
}
// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
let food = prompt("welcome to khadeem baker. what do you want to oder sir / mam")
let a = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
for ( i = 0 ; i < a.length ; i++){
    if ( food === a[i]){
        console.log(food + " is availabe  at index " + i +" in our bakery" )
    }
    
}
if(food !== a[i]) {
    document.write(food + " is not availabe   in our bakery" )

} 
// 9. Write a program to identify the largest number in the given
// array.
// A = [24, 53, 78, 91, 12]
let b = [92, 53, 78, 91, 12]
let largest = b[0]
for( let i = 1 ; i < b.length ; i++){
    if (b[i] > largest ){
        largest = b[i] 
        
    }
}
document.write("The largest number is:", largest);  
// 11. Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]
let c = [24, 93, 78, 91, 12];
let  larg = c[0];
let smal = c[0]
for (let i = 1 ; i < c.length ; i++){
    if(c[i] > larg ){
        larg = c[i]
    }
}
document.write("The largest number is:" + larg);  
for (let i = 1 ; i < c.length ; i++ ){
    if(c[i] < smal ){
        smal = c[i]
    }
}
document.write("The smalest number is:" + smal);  
// 12. Write a program to print multiples of 5 ranging 1 to 100
let five = []
for(i = 0 ; i <= 100 ; i++){
    if(i % 5 === 0 ){
       five.push(i) 
    }
 }
document.write(five)
// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
let d = [12, 45, 3, 22, 34];
let user = +prompt("give me a number");
let ary;
for(let i = 0 ; i < d.length; i++ ){
    if ( d[i] == user){
     ary = d.slice(0,i+1) 
    }
}
document.write(ary)
// 16. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.
let put = +prompt("enter a nummber");
let ary1 = [] ;
for (let i = put ; i >= 0; i -= 0.5 ){
    if (put >= 0) {ary1.push(i)
    }
    }
document.write(ary1)
// 17. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").
for(let i = 0 ;i <= 20; i++ ){
    if (i%2!=0){
        document.write(i+"is odd")
    }
    if (i%2===0){
        document.write(i+"is even")
        
    }
}
// 18. Write a program to calculate the product of the odd integers
// from 1 to 7.
let od = 1;
for(let i = 1 ;i <=7;i++ ){
    if(i%2!=0){
    od *=i
    }

}

 document.write(od)
// 19. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// * 
let star = +prompt("enter star lenth")
for(let i = star ; i>0 ;i-- ){
    document.write("*".repeat(i))
}
// 20. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **
// *
for(let i = 0 ; i <= 4 ; i++){
    document.write("*".repeat(5))
}
for(i=0; i<5;i++){
    document.write("*".repeat(i))
}
for(i=5;i>0;i--){
    document.write("*".repeat(i))
}