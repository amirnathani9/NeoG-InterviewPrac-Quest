// Create a password checker web app. If password is less than 10 characters then show an error to user otherwise show success. 

// Extension:
// Check button to be active only if password is greater than 10 characters.

const inputTxt = document.querySelector("#input-txt")
const btn =document.querySelector("#btn")
const msg =document.querySelector("#msg")

//extension 

btn.disabled = true;

inputTxt.addEventListener("input",()=>{
    
    if(inputTxt.value.length > 10){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
})

//first
btn.addEventListener("click",()=>{

    var txtInput = inputTxt.value
    if(txtInput.length<10){
        msg.innerText = "Error"
    }
    else{
        msg.innerText = "Succes"
    }
})