var hOne = document.querySelector("#h1")
var hTwo = document.querySelector("#h2")
var hThree = document.querySelector("#h3")
var inputText =document.querySelector("#input-text")
var outputBox = document.querySelector("#output")

var font = 0;
hOne.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value;
    font = 32;
    outputBox.style.fontSize = `${font}px` 
})

hTwo.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value;
    font = 24
    outputBox.style.fontSize = `${font}px` 
})

hThree.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value;
    font = 18.72;
    outputBox.style.fontSize = `${font}px` 
    
})


// outputBox.style.fontSize = `1.17em` 