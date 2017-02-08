You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

Behavior

Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
Loop over your array of cars and build up an HTML string that will create a series of Bootstrap rows with 3 columns in each one. Make sure you have a parent element with a class of container.
Put a standard Bootstrap navbar element at the top of your page.
Put only two elements in the navbar.
A text input field.
A button.
Make sure you display all properties of the car in the DOM. Basic styling is up to you.
Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.
When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.