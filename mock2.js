// Create an Input Element, which shows a display message according to the Input text. 
// If you type - 
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!"
// "Akanksha" - then show, "She is our CHEERFUL Interviewer!"


var inputTxt = document.querySelector("#input-txt");
var showBtn =document.querySelector("#show-btn");
var message = document.querySelector("#msg")

showBtn.addEventListener("click", ()=>{
    var inptxt = inputTxt.value;
    var inptxtLower = inptxt.toLowerCase();
    if(inptxtLower === "tanvi"){
        message.innerText = "She is the best CEO ever!";
    }
    if(inptxtLower === "tanay"){
        message.innerText = "He is our FUNNY mentor!";
    }
    if(inptxtLower === "swapnil"){
        message.innerText = "He helps us CONQUER jobs!";
    }
    if(inptxtLower === "akanksha"){
        message.innerText = "She is our CHEERFUL Interviewer!";
    }
})