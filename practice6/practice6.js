// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded

var loadingTxt = document.querySelector("#loading-txt")
var submitBtn = document.querySelector("#submit-btn")

submitBtn.addEventListener(`click`, ()=>{
    loadingTxt.style.display = "none"
})


