// prens.js Presentations for a bth webbapp-course

"use strict";

var prens = (function () {

    var kmom01 = {title: "kmom01",
		  qns: ["ett?", "tu?", "tre?"],
		  answs: ["uno.", "dos.", "tres."]};
    var kmom02 = {title: "kmom02",
		  qns: ["one?", "two?", "three?"],
		  answs: ["raz.", "dva.", "tri."]};

    var moms = [kmom01, kmom02];



    
    var makeView = function () {

	moms.forEach(function(mom){
	    var momContainer = document.createElement("div");
	    momContainer.innerHTML = mom.title;
	    window.mainContainer.appendChild(momContainer);
	}); // make a momcontainer with title etc
	
	
    };


    
    return {
	makeView: makeView
    };

    
})(prens);
