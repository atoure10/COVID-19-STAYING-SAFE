/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let textDiv= document.querySelector("#btn1")
console.log(textDiv)

textDiv.addEventListener("click", ()=>{
  textDiv.innerHTML="WASH HANDS!!!"
  
});
let distanceDiv= document.querySelector("#money2")
console.log(distanceDiv)

distanceDiv.addEventListener("click", ()=>{
  distanceDiv.innerHTML="STAY AWAY!"
  
});
let facDiv= document.querySelector("#cake3")
console.log(facDiv)

facDiv.addEventListener("click", ()=>{
facDiv.innerHTML="don't touch it"
  
});
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/help/countries?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
