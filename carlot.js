//Declared GLOBAL var.
var CarLot = (function () {
    // Priviate variables.
    var inventory = [];
    // var trucks = [];

    return {
        //XHR and Callback video ~ NSS ~ Review.
        loadInventory: function (callback) {
        // XHR Request = inventory.json file
            var inventoryLoader = new XMLHttpRequest();

        //Load broadcast and execute an anonymous callback on "load">>>>> Steve video
        inventoryLoader.addEventListener("load", function () {
            // Set the value of the private array, and parse into a native JS object/string > data > inventory.
            var inventoryData = JSON.parse(this.responseText);
            inventory = inventoryData.cars;
            console.log("inventory", inventory);

            // Callback to return the loaded car data from the JSON file >>>  See class video.
            callback(inventory);
        });

        // GET/send inventory.json
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    },

        getInventory: function () {
            return inventory
        }
    }

    //         loadTrucks: function (callback) {
    //     // XHR Request = trucks.json file
    //         var trucksLoader = new XMLHttpRequest();

    //     //Load broadcast and execute an anonymous callback >>>>> Steve video
    //     trucksLoader.addEventListener("load", function () {
    //         // Set the value of the private array, and parse into a native JS object/string > data > inventory.
    //         var trucksData = JSON.parse(this.responseText);
    //         inventory = trucksData.cars;
    //         console.log("trucks", trucks);

    //         // Callback to return the loaded car data from the JSON file >>>  See class video.
    //         callback(trucks);
    //     });

    //     // GET inventory.json
    //     trucksLoader.open("GET", "trucks.json");
    //     trucksLoader.send();
    // },

    //     getTrucks: function () {
    //         return trucks
    //     }
    // }

})();

// var CarLot = (function () {
//   var inventory = [];
//   var trucks = [];
  

//   return {
//     loadinventory: function (callback) {
//       if (inventory.length === 0) {
//         var loader = new XMLHttpRequest();
//         loader.addEventListener("load", function () {
//           inventory = JSON.parse(this.responseText);
//           callback(inventory);
//         });
//         loader.open("GET", "inventory.json");
//         loader.send();
//       } else {
//         callback(inventory);
//       }
//     },

//     loadTrucks: function (callback) {
//       if (trucks.length === 0) {
//         var loader = new XMLHttpRequest();
//         loader.addEventListener("load", function () {
//           trucks = JSON.parse(this.responseText);
//           callback(trucks);
//         });
//         loader.open("GET", "trucks.json");
//         loader.send();
//       } else {
//         callback(trucks);
//       }
//     }
//   }
// })();

