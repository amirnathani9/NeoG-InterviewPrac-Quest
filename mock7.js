// Create a password checker web application having 2 input sections that takes the password.If the value in both sections 
// are equal then show the message Success on the screen and if not equal then show Passwords Mismatched on the click of a button

var passTxt = document.querySelector("#password");
var passTxtVerify = document.querySelector("#password-verify")
var submitBtn = document.querySelector("#submit-btn")
var message  = document.querySelector("#msg")

submitBtn.addEventListener("click", ()=>{
    passTxtValue = passTxt.value;
    passTxtVerifyValue = passTxtVerify.value;
    if(passTxtValue === passTxtVerifyValue){
        message.innerText = "Success"
    }
    else{
        message.innerText = "Password mismatched"
    }
})