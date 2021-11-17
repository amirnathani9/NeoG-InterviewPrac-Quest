// Here is an API: [https://otpgenerator.ishanjirety.repl.co/get-otp?name=](https://otpgenerator.ishanjirety.repl.co/get-otp?name=)

// You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL :

// [https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered](https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered)

// ) on button click. In the response, you will get an OTP which should be shown on the screen.

// Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual 
// one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending.
//  The response is coming in the form of

// ```
// Name-OTP
// ```

// format so something like

// ```
// Pratyush-570928
// ```

// So compare the OTP value from the response as well as the input which is being entered

// Followup2: Change the color of validating message to GREEN when success comes up and change it to RED if failure comes
//  up on the click of Validate Button. 

const inputTxt = document.querySelector("#input-txt")
const valTxt = document.querySelector("#val-txt")
const btn =document.querySelector("#btn")
const btnTwo =document.querySelector("#btn-two")
const msg =document.querySelector("#msg")
const msgTwo =document.querySelector("#msg-two")



var url = `https://otpgenerator.ishanjirety.repl.co/get-otp?name=`

// function urlGenerator(name){
//     return url + name
// }

btn.addEventListener("click",()=>{
    var txtInput = inputTxt.value

    fetch(url + txtInput)
    .then(response=>response.json())
    .then(json =>{
        if(json.success===true){
            msg.innerText = json.otp
        }  
    })
})

btnTwo.addEventListener("click", ()=>{
    if(msg.innerText === valTxt.value){
        msgTwo.innerText = 'Success'
        msgTwo.style.color = "green"
    }
    else{
        msgTwo.innerText ="Failure"
        msgTwo.style.color = "Red"
    }
})