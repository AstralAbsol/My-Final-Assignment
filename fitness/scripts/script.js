/*
	Student Name: Blaine Church
	File Name: script.js
	Date: 11/20/2023
*/
//Global variables
var video = document.getElementById("example");
var videosaurce = document.getElementById("vid-src");
var descriptionsource = document.getElementById("despsrc");


//Hamburger menu function
function hamburger()  {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//Function to display the burpees example video
function burpees() {
	videosource.src = "media/burpees.mp4";
	descriptionsource.src = "media/burpees-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the plank example video
function plank() {
	videosource.src = "media/plank.mp4";
	descriptionsource.src.src = "media/plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the mountain climbers example video
function mountain() {
	videosource.src = "media/mc.mp4";
	descriptionsource.src = "media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.firstchild.nodeValue = "Promo Code: D25START";
	promo.style.color = "#ff0000";
	promo.style.fontsize = "2em";
}
