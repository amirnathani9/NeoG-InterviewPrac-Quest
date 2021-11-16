// Here' an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.

var apiBtn =document.querySelector("#api-btn")
var outputBox = document.querySelector("#output-box")
var url ="https://lessonfourapi.tanaypratap.repl.cotranslate/yoda.json"

function errorHandler(error){
    outputBox.innerText = error;
    
}

apiBtn.addEventListener("click", ()=>{
    fetch(url)
    .then(response=>response.json())
    .catch(errorHandler)
})