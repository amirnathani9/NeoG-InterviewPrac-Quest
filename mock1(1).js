// The question Pranshu asked was that the user will not be able to
//  add more characters after a certain limit has been reached (deleting 
// characters is still possible). He asked Saksham to disable the button 
// when the text area is empty and enable it when something is typed.

// As an extension of this, you can also cover the edge case that the 
// button should remain disabled if there are only spaces in the text area.


const inputTxt = document.querySelector("#input-txt")
const btn =document.querySelector("#btn")
btn.disabled = true;

inputTxt.addEventListener("input",()=>{

    if(inputTxt.value === ""){
        btn.disabled = true
    }
    else {
        btn.disabled =false
    }
})



