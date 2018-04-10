// home.js for AK's Me-App, a bth-exercise
// functions for the home-view
"use strict";

var views = (function () {
    var repoUrl = "https://api.github.com/users/annettekusma/repos";
    var showHome = function () {
	console.log("now inside showHome");
	window.mainContainer.innerHTML = "";
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
	
	window.mainContainer.appendChild(title);
	window.mainContainer.appendChild(greeting);
	console.log("appended title and greeting to mainContainer");
	window.rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");
	
	nav.showMenu("home");
	console.log("done showHome()");
    };
    var showAbout = function () {
	console.log("now inside showAbout");
	window.mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Om denna app";
	console.log("made title with content");
	
	var aboutText = document.createElement("p");
	aboutText.textContent = "Denna app är en övning i en kurs om webbapplikationer på Blekinge tekniska högskola. Eftersom vi ska öva med både XMLHttpRequest och Fetch så får requensten vara kvar i github-vyn och jag testar fetchen här.";
	console.log("made p with content (aboutText)");

	window.mainContainer.appendChild(title);
	window.mainContainer.appendChild(aboutText);
	console.log("appended title and aboutText to mainContainer");

	fetch(repoUrl)
	    .then(function (response) {
		return response.json();
	    })
	    .then(function (data) {
		data.forEach(function(repo) {
		    var repoElement = document.createElement("p");
		    repoElement.textContent = repo.name;
		    window.mainContainer.appendChild(repoElement);
		});
	    }).catch(function (error) {
		console.log('fetch operation failed, error:', error.message);
	    });

	window.rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	nav.showMenu("about");
	console.log("done showAbout()");

};
    var showRepos = function () {
	window.mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Jag på GitHub";
	console.log("made title with content");

	var gitText = document.createElement("p");
	gitText.textContent = "Här ska stå nåt om katthubben.";
	console.log("made p with content (gitText)");

	window.mainContainer.appendChild(title);
	window.mainContainer.appendChild(gitText);
	console.log("appended title and gitText to mainContainer");

	// private
	var renderGithubRepos = function () {
	    console.log("now inside renderGithubRepos(this)");
	    console.log(this);
	    var repos = JSON.parse(this.responseText);

	    repos.forEach(function(repo) {
		console.log("now inside repos.forEach");
		var repoElement = document.createElement("p");
		repoElement.textContent = repo.name;
		window.mainContainer.appendChild(repoElement);
		console.log("appended repoElement to mainContainer");
	    });
	};
	console.log("done defining renderGithubRepos()");

	var githubRequest = new XMLHttpRequest();
	githubRequest.addEventListener("load", renderGithubRepos);
	githubRequest.open("GET", repoUrl);
	githubRequest.send();

	window.rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	nav.showMenu("repos");
    };
    var showPrens = function () {
	console.log("now inside showPrens");
	window.mainContainer.innerHTML = "";
	console.log("made mainContainer.innerHTML");

	var title = document.createElement("h1");
	title.className = "title";
	title.textContent = "Mina redovisningar";
	console.log("made title with content");
	
	var prenText = document.createElement("p");

	prenText.textContent = "Här ska redovisningen vara.";
	console.log("made p with content (prenText)");

	window.mainContainer.appendChild(title);
	window.mainContainer.appendChild(prenText);
	console.log("appended title and redText to mainContainer");
	window.rootElement.appendChild(mainContainer);
	console.log("appended mainContainer to rootElement");

	nav.showMenu("Prens");

    };
    return {
	showHome: showHome,
	showAbout: showAbout,
	showRepos: showRepos,
	showPrens: showPrens
    };
})(views);
