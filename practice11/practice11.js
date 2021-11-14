// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. 
// Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

var passwordTxt = document.querySelector("#password");
var passBtn = document.querySelector("#pass-btn")
var msg = document.querySelector("#msg")

passBtn.addEventListener("click", ()=>{
    passTxtInput = passwordTxt.value
    passTxtChar = passTxtInput.length
    
    if(passTxtChar<10){
        msg.innerText = "Error plzz input the proper password"
        msg.style.color = "red"
    }
    else{
        msg.innerText = "Success"
        passBtn.disabled = "true";
        msg.style.color = "green"
    }
})