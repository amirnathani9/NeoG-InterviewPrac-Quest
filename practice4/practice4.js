var inputText = document.querySelector("#input-text");
var redBtn = document.querySelector("#red")
var greenBtn = document.querySelector("#green")
var blueBtn = document.querySelector("#blue")
var outputBox = document.querySelector("#output")

redBtn.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value
    outputBox.style.color = `red`})

greenBtn.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value
    outputBox.style.color = `green`
})

blueBtn.addEventListener("click", ()=>{
    outputBox.innerText = inputText.value
    outputBox.style.color = "blue"
})