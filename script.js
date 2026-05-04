// Select input field and task list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {

    // Check if input field is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {

        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create delete button (span) and add to list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // "×" symbol
        li.appendChild(span);
    }

    // Clear input field after adding task
    inputBox.value = "";

    // Save updated task list
    saveData();
}

// Add event listener for Enter key to submit task
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Add event listener for task list actions (complete / delete)
listContainer.addEventListener("click", function(e) {

    // Toggle completed state when task is clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // Remove task when delete button is clicked
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// Save task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load task list from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Display saved tasks on page load
showTask();
