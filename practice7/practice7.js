var inputTxt = document.querySelector("#input-txt")
var apiBtn = document.querySelector("#api-btn")
var capBtn = document.querySelector("#cap-btn")
var appendtTxt = document.querySelector("#append-txt")
var appendBtn = document.querySelector("#append-btn")
var outputBox = document.querySelector("#output-box")


var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translatdUrl(text){
    return url + "?" + "text=" + text;
}

function eventHandler(){
    var txtInput = inputTxt.value;

    fetch(translatdUrl(txtInput))
    .then(response=>response.json())
    .then(json=>{outputBox.innerText = json.contents.text})
}

apiBtn.addEventListener("click", eventHandler)

capBtn.addEventListener("click", ()=>{
    outputBox.style.textTransform = "capitalize"
})

appendBtn.addEventListener("click", ()=>{
    var appendedTxt = outputBox.innerText + " " + appendtTxt.value;
    outputBox.innerText = appendedTxt;
})