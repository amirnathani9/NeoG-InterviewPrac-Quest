inputOne = document.querySelector("#input-one");
inputTwo = document.querySelector("#input-two");
addBtn = document.querySelector("#add")
subBtn = document.querySelector("#sub")
multiBtn = document.querySelector("#multi")
divBtn = document.querySelector("#div")
outputBox = document.querySelector("#output")

addBtn.addEventListener("click", function addition(){
    var valueOne = Number(inputOne.value);
    var valueTwo = Number(inputTwo.value);
    
    var sum = valueOne + valueTwo
    // console.log(sum)
    outputBox.innerText = sum
})

subBtn.addEventListener("click", function subtraction(){
    var valueOne = Number(inputOne.value);
    var valueTwo = Number(inputTwo.value);
    
    var subtract = valueOne - valueTwo

    outputBox.innerText = subtract
})

multiBtn.addEventListener("click", function multiplication(){
    var valueOne = Number(inputOne.value);
    var valueTwo = Number(inputTwo.value);
    
    var multiply = valueOne * valueTwo

    outputBox.innerText = multiply
})

divBtn.addEventListener("click", function division(){
    var valueOne = Number(inputOne.value);
    var valueTwo = Number(inputTwo.value);
    
    var divide = valueOne / valueTwo

    outputBox.innerText = divide
})