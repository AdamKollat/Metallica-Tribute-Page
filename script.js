let n = 0;
let saved = [];
let list = document.getElementById("savedList");
let saveButton = document.getElementsByClassName("save");
let likeButton = document.getElementsByClassName("like");


function onLoad() { // I have based this element on the code form the example provided for this task
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {  // If code hasn't run before
        sessionStorage.setItem("savedItems", JSON.stringify(saved)); // Add the books array to sessionStorage
        sessionStorage.setItem("hasCodeRunBefore", true);   // Update ses
    } else {
        saved = JSON.parse(sessionStorage.getItem("savedItems")); //Get the array of book objects from sessionStorage and assign it to the array 'books'
        saved.forEach(function (s) {    // Loop through array and for each book object
            let paragraph = document.createElement("p");    // Create paragraph element
            paragraph.innerHTML = s; // Set innerHTML for new p element using the object's values
            list.appendChild(paragraph);   // Append new p element to the container element
        });
    }
}