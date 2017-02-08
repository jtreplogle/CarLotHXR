// You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

// Behavior

// Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
// When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
// Loop over your array of cars and build up an HTML string that will create a series of Bootstrap rows with 3 columns in each one. Make sure you have a parent element with a class of container.
// Put a standard Bootstrap navbar element at the top of your page.
// Put only two elements in the navbar.
// A text input field.
// A button.
// Make sure you display all properties of the car in the DOM. Basic styling is up to you.
// Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.
// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.

function populatePage (cars) {
  //Establish DOM output by Id and create empty string element.
    var domOutput = document.getElementById("carToDOM");
    var carOutput = "";
    var currentCar;

    carOutput += `<div class="row">`;

    //Build DOM via loop. Add json info + capture images. Funtionality:  Match border with car color. 

    for (var i = 0; i < cars.length; i++) {
        currentCar = cars[i];
        //Bootstrap rows.
        carOutput += `<div class="carCard col-md-3 unselected" id="${currentCar.make} ${currentCar.model}"`;
        carOutput += `style="border-color:${currentCar.color}">`
        // carOutput += '<div class="imgCar">${currentCar.img}</div>' //Is there a better way to notate this in {}?
        carOutput += "<img src='" + currentCar.imgUrl + "'>";
        //Year + Make + Model
        carOutput += `<h2>${currentCar.year} ${currentCar.make} ${currentCar.model}</h2>`;
        //Establish current color to the DOM and define border color via json key:value.
        carOutput += `<h4>Color: ${currentCar.color}</h4>`;
        //Price
        carOutput += `<h4>Price: $${currentCar.price}</h4>`;
            // Availible? Ture or False (key/value ~ json)
            if (!currentCar.purchased) {
                carOutput += `<h5>Available for Purchase!</h5>`; 
            } else {
                carOutput += `<div class="sold"><h4>SORRY SOLD!!!</h4></div>`;
                // if (currentCar.purchased !== true) {alert("Would you like us to order you one like this?")};
                // The alert is firing before page loads and not when "sold" card is clicked. Add to events.
            }
            //Initial description.
        carOutput += `<p>Description: ${currentCar.description}</p></div>`;
    }
    carOutput += `</div>`;
    domOutput.innerHTML = carOutput;

// EventListeners.js + link to HTML
    CarLot.activateEvents();
}

//Load inventory "after page loads"
CarLot.loadInventory(populatePage);
// CarLot.loadTrucks(populatePage);

//Ref from PetFood proj.

      // for (var k = 0; k < volumes.length; k++) {
      //   var currentVolume = volumes[k].name;
      //   // console.log(currentVolume);
      //   var currentPrice = volumes[k].price;

      //   //build up HTML for each dogfood card
      //   var dogFoodHTML = `<div class="card"><h1>${currentBrandName}</h1>`;
      //   dogFoodHTML += `<h5>Type: ${currentType}</h5>`;
      //   dogFoodHTML += `<h4>Size: ${currentVolume}</h4>`;
      //   dogFoodHTML += `<h4>Price: $${currentPrice}</h4></div>`;

      //   //add the finished card to the innerHTML of the dog food element
      //   dogfoodEl.innerHTML += dogFoodHTML

    

