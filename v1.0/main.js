// main.js for AK's Me-App, a bth-exercise
"use strict";

(function () {


    var rootElement = document.getElementById("root");
    console.log("made rootElement");

    var mainContainer = document.createElement("main");
    mainContainer.className = "container";
    console.log("made mainContainer");

    var navigation = document.createElement("nav");
    navigation.className = "bottom-nav";
    console.log("made navigation");

    var showMenu = function (selected) {
	console.log("now inside showMenu()");

	navigation.innerHTML = "";
	console.log("made navigation.innerHTML");

	var navElements = [{name: "Me", class: "home", nav: showHome},
			   {name: "Om", class: "about", nav: showAbout},
			   {name: "Github", class: "cat", nav: showGit},
			   {name: "Redovisning", class: "bth", nav: showRed}];

	navElements.forEach(function (element) {
	    console.log("inside navElements.forEach");
	    var navElement = document.createElement("a");
	    navElement.innerHTML = element.name;

	    if (selected === element.class) {
		navElement.className = "active";
	    }

	    navElement.addEventListener("click", element.nav);
	    navigation.appendChild(navElement);
	    console.log("appended navElement to navigation");
	})
	rootElement.appendChild(navigation);
	console.log("appended navigation to rootElement");		   
    };
 
    var showHome = function () {
	console.log("now inside showHome");
	mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Annette Kusma";
	console.log("made title with content");
	
	var greeting = document.createElement("p");
	var timeOfDayGreeting = "Goddagens";
	var now = new Date();

	if (now.getHours() < 10) {
            timeOfDayGreeting = "Godmorgon";
	} else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
	}

	greeting.textContent = timeOfDayGreeting +
            ", jag heter Annette Kusma och är lokförare på SJ AB.";
	console.log("made p with content (greeting)");

	mainContainer.appendChild(title);
	mainContainer.appendChild(greeting);
	console.log("appended title and greeting to mainContainer");
	rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	showMenu("home");
	console.log("done showHome()");
    };
    console.log("done defining showHome()");

    var showAbout = function () {
	console.log("now inside showAbout");
	mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Om denna app";
	console.log("made title with content");
	
	var aboutText = document.createElement("p");
	aboutText.textContent = "Denna app är en övning i en kurs om webbapplikationer på Blekinge tekniska högskola. Eftersom vi ska öva med både XMLHttpRequest och Fetch så får requensten vara kvar i github-vyn och jag testar fetchen här.";
	console.log("made p with content (aboutText)");

	mainContainer.appendChild(title);
	mainContainer.appendChild(aboutText);
	console.log("appended title and aboutText to mainContainer");

	fetch("https://api.github.com/users/annettekusma/repos")
	    .then(function (response) {
		return response.json();
	    })
	    .then(function (data) {
		data.forEach(function(repo) {
		    var repoElement = document.createElement("p");
		    repoElement.textContent = repo.name;
		    mainContainer.appendChild(repoElement);
		});
	    }).catch(function (error) {
		console.log('fetch operation failed, error:', error.message);
	    });

	rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	showMenu("about");
	console.log("done showAbout()");
    };
    console.log("done defining showAbout()");

    var showGit = function () {
	console.log("now inside showGit");

	mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Jag på GitHub";
	console.log("made title with content");

	var gitText = document.createElement("p");
	gitText.textContent = "Här ska stå nåt om katthubben.";
	console.log("made p with content (gitText)");

	mainContainer.appendChild(title);
	mainContainer.appendChild(gitText);
	console.log("appended title and gitText to mainContainer");

	var renderGithubRepos = function () {
	    console.log("now inside renderGithubRepos(this)");
	    console.log(this);
	    var repos = JSON.parse(this.responseText);

	    repos.forEach(function(repo) {
		console.log("now inside repos.forEach");
		var repoElement = document.createElement("p");
		repoElement.textContent = repo.name;
		mainContainer.appendChild(repoElement);
		console.log("appended repoElement to mainContainer");
	    });
	};
	console.log("done defining renderGithubRepos()");

	var githubRequest = new XMLHttpRequest();
	githubRequest.addEventListener("load", renderGithubRepos);
	githubRequest.open("GET", "https://api.github.com/users/annettekusma/repos");
	githubRequest.send();

	rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	showMenu("github");
	console.log("done showGit()");
    };
    console.log("done defining showGit()");
    
    var showRed = function () {
	console.log("now inside showRed");
	mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Mina redovisningar";
	console.log("made title with content");
	
	var redText = document.createElement("p");

	redText.textContent = "Här ska redovisningen vara.";
	console.log("made p with content (gitText)");

	mainContainer.appendChild(title);
	mainContainer.appendChild(redText);
	console.log("appended title and redText to mainContainer");
	rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	showMenu("Redovisning");
	console.log("done showRed()");
    };
    console.log("done defining showRed()");
    

    /* ---------  B U I L D   D O M  ------------------*/

    /*
      root -|
            |- mainContainer -|
            |                 |- title
            |                 |- greeting
            |- navigation -|
                           |- "Me"
                           |- "Om"
                           |- "Github"
                           |- "Redovisning"

     */


    
     // does it matter in what order these two appear?
    // I'd rather put the second one further up
    // ok, I get the hint, all DOM-building in one place? 

    showHome();

})();
