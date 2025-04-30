
// 7. Selecting Multiple Elements:
// Write a JavaScript function that selects all the paragraphs (<p>) on a webpage and change their text to something else.
let Change_p = document.querySelectorAll("p");
let new_p = "The quick brown fox jumps over the lazy dog.";
for (let i = 0 ; i < Change_p.length ; i++){
    Change_p[i].innerHTML = new_p
}
// 8. Looping Through NodeList:
// Using document.querySelectorAll(), select all the list items (<li>) with the class menu-item and log each one to the console.let
let yew = document.querySelectorAll("li.ye");
for (let i =0 ; i < yew.length ; i++){
    console.log(yew[i].innerHTML)
}
// 9. Manipulating Text Content:
// Select all the <h2> tags on the page and change their text content to "Updated Title".
let new_h2 = document.querySelectorAll("h2")
let change_h2 = ("Updated Title");
for (i = 0 ; i < new_h2.length ; i++){
    new_h2[i].innerHTML = change_h2 
}