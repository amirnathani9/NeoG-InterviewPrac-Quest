// Create a web app and render your name using any heading or paragraph tag.
// It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. 
// The width of border should change to 5px and 10px by clicking respective buttons.

var fivePixel = document.querySelector("#five-pixel")
var tenPixel = document.querySelector("#ten-pixel")
var nameTag = document.querySelector(".name-tag")

size = 0;

fivePixel.addEventListener("click",()=>{
    nameTag.style.border = `${5}px solid`
})

tenPixel.addEventListener("click",()=>{
    size = 10
    nameTag.style.border = `${size}px solid`
})