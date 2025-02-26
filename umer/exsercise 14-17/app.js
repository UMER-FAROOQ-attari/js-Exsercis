// 1. Declare an empty array using JS literal notation to store
// student names in future.
let empty_array = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
let array_notation = new Array();
// 3. Declare and initialize a strings array
let boys = ["umer" , "abubaker "," hassan" ," haris " , " naeem "];
// 4. Declare and initialize a numbers array.
let array = [2 , 3,5 ,7,4,2,3,4,5,5,6,79,];
// 5. Declare and initialize a boolean array
let array_boolean = [true,false];
// 6. Declare and initialize a mixed array
let array_mixed = ["umer" , 18 , true ]
// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.
let networks_array = ["jazz","zong","telenor" , "ufone"]    
// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:
let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil.","PhD"];
document.write("<h1>qualifications</h1>" +  "<br>"+"<br>"+"1) "+ qualifications[0]);
document.write("<br>"+"2) "+ qualifications[1]);
document.write("<br>"+"3) "+ qualifications[2]);
document.write("<br>"+"4) "+ qualifications[3]);
document.write("<br>"+"5) "+ qualifications[4]);
document.write("<br>"+"6) "+ qualifications[5]);
document.write("<br>"+"7) "+ qualifications[6]);
document.write("<br>"+"8) "+ qualifications[7]);
// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)
let movies = [];
movies[1] = ("Avenger: Age of Ultron");
movies[2] = ("Spectre");
movies[3] = ("jurassic world");
movies[4] = ("Inside Out");
document.write("<h1> Top Movies of 2015 </h1> "+"<br>");
document.write("<br>"+"1)"+ movies[1]);
document.write("<br>"+"2)"+ movies[2]);
document.write("<br>"+"3)"+ movies[3]);
document.write("<br>"+"4)"+ movies[4]);
document.write("<br>"+" Lenth of the Array : " + movies.length);
// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array
let car = ["Audi","Volvo","Ford","Lamborghini"];
document.write("<h1>Favorite Cars </h1>"+"<br>" +"<br>");
document.write("<br>"+"First index of the array : "+ car.indexOf("Audi")) 
document.write("<br>"+ "Car at fist index of the array : "+ car[0] );
document.write("<br>"+ "Last index of the arry ;" + car[car.length -1]);
document.write("<br>"+ "Car at last index of the array : " + (car.length -1))
// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:
let students = [ "Michael" , "John" , "Tony"];
let numbers = [320,230,480 ];
let total_number = 500;
document.write( "<br>"+ " Score of " + students[0] + " is " + numbers[0] + ". percentages : " +  numbers[0] / total_number  * 100 +"%" );
document.write( "<br>"+ " Score of " + students[1] + " is " + numbers[1] + ". percentages : " +  numbers[1] / total_number  * 100 +"%" );
document.write( "<br>"+ " Score of " + students[2] + " is " + numbers[2] + ". percentages : " +  numbers[2] / total_number  * 100 +"%" );
// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// ARRAYS |	JAVASCRIPT
// Page	4 of	8
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
let colors = [ "red" , "green", "yellow" , "pink"];
document.write("</br>"+ colors);
colors.unshift("orange")
document.write("</br>"+colors);
colors.push("golden")
document.write("</br>"+colors);
colors.unshift("zink", "black");
document.write("</br>"+colors);
colors.shift()
document.write("</br>"+colors);
colors.pop()
document.write("</br>"+colors);
colors.splice(3,0,"white")
document.write("</br>"+colors);
colors.splice(5,2)
document.write("</br>"+colors);
// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method. 
let scores = [320, 230 ,480,120];
document.write("</br>"+"Scores of Students : " + scores);
scores.sort((a, b) => a - b);
document.write("</br>"+"assaending Scores of Students : " + scores);
// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array. 
let cities = [ "karachi" , "lahore" , "toba tek sing", "Islamabad", "Quetta", "Peshawar"] 
document.write("</br>"+cities);
let cities_3 = cities.slice(2,5)
document.write("</br>"+cities_3);
// 16. Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
let arrs= arr.join("")
document.write("</br>"+arrs);
// 17. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)
let outs = []
outs.push("keyborad")
outs.push("Mouse")
outs.push("Printer")
outs.push("Moniter");
document.write("</br>"+ outs)
outs.shift()
document.write("</br>"+ outs)
outs.shift()
document.write("</br>"+ outs)
outs.shift()
document.write("</br>"+ outs)
outs.shift()
document.write("</br>"+ outs)
// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)
outs.push("keyborad")
outs.push("Mouse")
outs.push("Printer")
outs.push("Moniter");
document.write("</br>"+ outs)
outs.pop()
document.write("</br>"+ outs)
outs.pop()
document.write("</br>"+ outs)
outs.pop()
document.write("</br>"+ outs)
outs.pop()
document.write("</br>"+ outs)
outs.pop()
// 21. Declare and initialize a multidimensional array representing
// the following matrix:
let multidimensional = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
document.write("</br>"+ multidimensional)
let m_join = multidimensional.join()
document.write("</br>"+m_join)
document.write("")
