var CarLot = (function (oldCarLot) {

    oldCarLot.addUnselectClass = function () {
        //Add array to store the DOM car cards to display with active borders js/css.  ~See directions.
        
        var carCardsArray = document.getElementsByClassName("carCard");

        for (var i = 0; i < carCardsArray.length; i++) {
            //Increment for each [i]. Lost functionality with empty array.
            thisCard = carCardsArray[i];
            //Remove selected class from array.
            thisCard.classList.remove("selected");
            //Add to.
            thisCard.classList.add("unselected");
            //Set unselected card background to white/default.
            thisCard.style.backgroundColor = "white";
        }
    },

    //Struggle-bus.  Without "classList", this does not work.  
    oldCarLot.addSelectedClass = function (clickedEl, newBackgroundColor) {
        clickedEl.classList.remove("unselected");
        clickedEl.classList.add("selected");
        clickedEl.style.backgroundColor = newBackgroundColor;
    }   
    //Return augment to global variable ~ carlot.js
    return oldCarLot;
}) (CarLot);