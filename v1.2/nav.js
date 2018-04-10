// nav.js for AK's Me-App, a bth-exercise
// functions for navigation
"use strict";

var nav = (function () {

    // public
    var showMenu = function (item) {
	console.log("now inside showMenu()");

	window.navigation.innerHTML = "";
	console.log("made navigation.innerHTML");

	var navElements = [{name: "Me", class: "home", nav: views.showHome},
			   {name: "Om", class: "about", nav: views.showAbout},
			   {name: "Github", class: "repos", nav: views.showRepos},
			   {name: "Redovisningar", class: "prens", nav: views.showPrens}];

	navElements.forEach(function (element) {
	    console.log("inside navElements.forEach");
	    var navElement = document.createElement("a");
	    navElement.innerHTML = element.name;
	    navElement.className = "nav";

	    if (item === element.class) {
		navElement.className = "nav active";
	    }

	    navElement.addEventListener("click", element.nav);
	    window.navigation.appendChild(navElement);
	    console.log("appended navElement to navigation");
	})
	window.rootElement.appendChild(navigation);
	console.log("appended navigation to rootElement");		   

    };

    return {
	showMenu: showMenu
    };
})(nav);
