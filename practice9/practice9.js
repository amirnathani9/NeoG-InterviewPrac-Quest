// Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, 
// show the user 'you are not logged in'.


var apiBtn = document.querySelector("#api-btn")
var message = document.querySelector("#message")


var url = " https://unitube-server.herokuapp.com/playlists"

function errorHandler(error) {
    message.innerText = error
}

apiBtn.addEventListener("click", () => {
    fetch(url)
        .then(response => {
            console.log(response.status)
            if (response.status === 404) {
                throw ("page not found")
            } else if (response.status === 401) {
                throw ("you are not logged in")
            }
        })
        
        .catch(errorHandler)
})


