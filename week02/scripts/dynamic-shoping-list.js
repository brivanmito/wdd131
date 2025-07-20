// Create three variables that hold references to the list(<ul>), <input>, and <button> elements.
const uList = document.querySelector("ul");

const inputVariable = document.querySelector("input");

const buttonVariable = document.querySelector("button");

// Create a function that will run in response to the button being clicked.
buttonVariable.addEventListener('click', () => {

    // Inside the function body, start off by storing the current value of the input element in a variable.
    const valueInput = inputVariable.value;

    // Next, empty the input element by setting its value to an empty string — "".
    inputVariable.value = '';

    // Create three new elements — a list item(<li>), <span>, and <button>, and store them in variables.
    const itemList = document.createElement("li");
    const spans = document.createElement("span");
    const buttonNode = document.createElement("button");

    // Append the span and the button as children of the list item.
    itemList.appendChild(spans);
    itemList.appendChild(buttonNode);

    // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    spans.textContent = valueInput;
    buttonNode.textContent = 'Delete';

    // Append the list item as a child of the list.
    uList.appendChild(itemList);

    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item(<li>...</li>).
    buttonNode.addEventListener('click', () => {
        uList.removeChild(itemList);
    })

    inputVariable.focus();


});