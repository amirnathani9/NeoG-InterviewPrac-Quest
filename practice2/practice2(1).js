inputText= document.querySelector("#input-text");
increaseTextBtn =document.querySelector("#increase-text")
decreaseTextBtn = document.querySelector("#decrease-text")

let font = 32;

increaseTextBtn.addEventListener("click",() =>{
    
    inputText.style.fontSize = font + 2 +"px"
    font+=2;
})

decreaseTextBtn.addEventListener("click",()=>{
    inputText.style.fontSize = font - 2 + "px"
    font-=2
})

