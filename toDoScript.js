//toDoScript.js

document.getElementById("user-form").addEventListener("submit", function(event) { 
    //this document(HTML) retrives the form element and ataches event listener to lsiten for the submit button 
event.preventDefault(); //this prevents the page from reloading when a task is submitted
const toDoInput = document.getElementById("user-input"); //Retrieves user-input and assigned an JS element to it
const toDoList = document.getElementById("list"); //Retrieves list and assigned an JS element to it
const newTask = document.createElement("li"); //creates a new list tiem element <li> and assigns it to JS element
newTask.textContent = toDoInput.value; //assigns task inputed by user to the text conent of the new list item
toDoList.appendChild(newTask); //adds the new task as a child elemtn and adding ti to the dispayed tasks 
toDoInput.value =" "; //clears the text in the add bar after its been added

})