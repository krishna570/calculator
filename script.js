// Selecting the display input field where the calculator results and expressions will be shown
let input = document.querySelector('.display');
// Selecting all button elements inside the "buttons" container to add functionality to each
let buttons = document.querySelectorAll('.buttons button');

let string = ""; // To store the input from button presses

// Looping through each button to add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Getting the text content of the clicked button
        let value = e.target.innerText;

        if (value === 'AC') {
            // If the "AC" button is clicked, clear the input completely
            string = ""; // Resetting the input string
            input.value = "0"; // Displaying 0 in the input field
        } else if (value === 'DEL') {
            // If the "DEL" button is clicked, remove the last character
            string = string.slice(0, -1); // Slicing the last character off
            input.value = string || "0"; // Displaying the modified string or 0 if empty
        } else if (value === '=') {
            // If the "=" button is clicked, evaluate the expression
            try {
                string = eval(string).toString(); // Evaluating and converting result to string
                input.value = string; // Displaying the result in the input field
            } catch {
                // Displaying "Error" if the expression is invalid
                input.value = "Error";
                string = ""; // Resetting the string for a new input
            }
        } else {
            // For any other button, append its value to the input string
            string += value; // Adding clicked button's value to the end of the string
            input.value = string; // Displaying the updated string in the input field
        }
    });
});

