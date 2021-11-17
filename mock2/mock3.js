// Display the results of this API's response : https://quick-access-api.desaihetav.repl.co/ 
// on the screen


var msg =document.querySelector("#msg")


url = `https://quick-access-api.desaihetav.repl.co/`

function play(){
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        msg.innerText = json.message;
    })
}
play()