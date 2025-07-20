// In your blank js file, declare three(3) variables that hold references to the input, button, and list elements.
const inputVariable = document.querySelector("input");
const buttonVariable = document.querySelector("button");
const listVariable = document.querySelector("ul");

// // Create a li element that will hold each entry's chapter title and an associated delete button.
// const liElement = document.createElement("li");

// // Create a delete button
// const deleteButton = document.createElement("button");

// // Populate the li element variable's textContent or innerHTML with the input value.
// liElement.textContent = inputVariable.value;

// // Populate the button textContent with a ❌
// deleteButton.textContent = ;

// // Append the li element variable with the delete button
// liElement.append(deleteButton"❌");

// // Append the li element variable to the unordered list in your HTML.
// listVariable.append(liElement);



// Create a click event listener for the Add Chapter button using an addEventListener.
buttonVariable.addEventListener("click", () => {
    // Check to make sure the input is not blank before completing the remaining tasks in this list by using an if block that provides a message or does nothing and returns the.focus() to the input field.
    if (inputVariable.value.trim() !== "") {

        const liElement = document.createElement("li");
        const deleteButton = document.createElement("button");
        //Populate variables
        liElement.textContent = inputVariable.value;
        deleteButton.textContent = "❌";
        // You need to consider screen readers and how they will interpret anything in the content.For example, the delete button just has an emoticon and may not read correctly as the button to remove a chapter.What can we do? One solution is to create a aria - label attribute on the button with a value like "Remove Alma 5".
        deleteButton.setAttribute("aria-label", `Remove ${liElement.value}`);

        //Append to secundary nodes}
        liElement.append(deleteButton);
        //Append to principal nodes
        listVariable.append(liElement);
        inputVariable.value = "";

        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener("click", ()=>{
            // Add an event listener to the delete button that removes the li element when clicked.
            listVariable.removeChild(liElement);
            inputVariable.focus();
        });
        
    }
    inputVariable.focus();
});
