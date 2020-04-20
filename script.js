/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let textDiv= document.querySelector("#btn1")
console.log(textDiv)

textDiv.addEventListener("click", ()=>{
  textDiv.innerHTML="you clicked me!!!"
  
});
let distanceDiv= document.querySelector("#money2")
console.log(distanceDiv)

distanceDiv.addEventListener("click", ()=>{
  distanceDiv.innerHTML="stay away"
  
});
let facDiv= document.querySelector("#cake3")
console.log(facDiv)

facDiv.addEventListener("click", ()=>{
facDiv.innerHTML="don't touch it"
  
});