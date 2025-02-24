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