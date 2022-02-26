// Fetch an API ( https://jsonplaceholder.typicode.com/todos ) and display it on the output on screen.

const app = document.querySelector("#msg")

var url = `https://jsonplaceholder.typicode.com/todos`

function getTodos() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            console.log(todos)
            let result = "";
            app.innerHTML = todos.map((todo) => {

                result+= (!todo.completed)? `<p class=notcompleted>Title: ${todo.title}</p>` : `<p>Title: ${todo.title}</p>`
                
                result += `<p>Completed: ${todo.completed}</p><br>`
                return result;
            })
        })
}


getTodos()