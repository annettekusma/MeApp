// main.js for AK's Me-App, a bth-exercise
"use strict";

 
(function () {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";

    views.showHome();
})();
