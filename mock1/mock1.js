//counter application

var numText = document.querySelector("#num-text");
var increaseBtn = document.querySelector("#increase-btn");
var decreaseBtn = document.querySelector("#decrease-btn")

increaseBtn.addEventListener("click",()=>{
    numText.innerText = Number(numText.innerText) + 1;
})

decreaseBtn.addEventListener("click",()=>{
    numText.innerText = Number(numText.innerText) - 1;
})