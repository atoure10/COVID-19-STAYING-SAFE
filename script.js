/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
let textDiv= document.querySelector(".btn")
console.log(textDiv)

textDiv.addEventListener("click", ()=>{
  textDiv.innerHTML="you clicked me!!!"
  
})
let nextDiv= document.querySelector("#btn1")
console.log(nextDiv)

nextDiv.addEventListener("click", ()=>{
  nextDiv.innerHTML="you clicked me!!!"
  
})
let lextDiv= document.querySelector(".btn")
console.log(textDiv)

textDiv.addEventListener("click", ()=>{
  textDiv.innerHTML="you clicked me!!!"
  
})