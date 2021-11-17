// Take an input from the user in text format. 
// Have 3 buttons with the names of "Log" ,"Warn" and "Error".
// If user clicks on "Log" button then the text entered by user will be shown in black color.
// Similarly if the user clicks on "Warn " and "Error " 
// buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively. 

var inputTxt = document.querySelector("#input-txt")
var log = document.querySelector("#log")
var warn = document.querySelector("#warn")
var error = document.querySelector("#error")
var outputBox = document.querySelector("#output-box")


log.addEventListener("click",()=>{
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "black"
})

warn.addEventListener("click",()=>{
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "yellow"
})

error.addEventListener("click",()=>{
    outputBox.innerText = inputTxt.value;
    outputBox.style.color = "red"
})