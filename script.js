/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let textDiv= document.querySelector("#btn1")
console.log(textDiv)

textDiv.addEventListener("click", ()=>{
  textDiv.innerHTML="you clicked me!!!"
  
})
let distanceDiv= document.querySelector("#btn2")
console.log(distanceDiv)

distanceDiv.addEventListener("click", ()=>{
  distanceDiv.innerHTML="stay away"
  
})
let lextDiv= document.querySelector("#btn3")
console.log(lextDiv)

lextDiv.addEventListener("click", ()=>{
  lextDiv.innerHTML="don't touch it"
  
})