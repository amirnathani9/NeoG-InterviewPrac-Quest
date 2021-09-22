inputText= document.querySelector("#input-text");
increaseTextBtn =document.querySelector("#increase-text")
decreaseTextBtn = document.querySelector("#decrease-text")
outputBox = document.querySelector("#output")
let font= 32
increaseTextBtn.addEventListener("click", function increaseText(){
    outputBox.innerText= inputText.value;
    font+=2;
    outputBox.style.fontSize = `${font}px`;
})

decreaseTextBtn.addEventListener("click", function decreaseText(){
    outputBox.innerText = inputText.value;
    font-=2;
    outputBox.style.fontSize = `${font}px`
})
