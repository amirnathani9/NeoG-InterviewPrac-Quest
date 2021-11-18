// You need to create three input fields and an output field. First, two input fields will take numbers as input. The last input field will take the operator as input.
// Operators are +, -, × and /. If the third input field value is + then show in the output field the sum of the first input value + second input value.
// Similarly, if we enter  ×, - and / in the third input field.Note: Button is not required .Bonus for this question: limit the last input field to take only +,-,× and /. Show error if use

var inputOne = document.querySelector("#input-one")
var inputTwo = document.querySelector("#input-two")
var inputThree = document.querySelector("#input-three")
var msg = document.querySelector("#msg")


inputThree.addEventListener("input", () => {
    var inputOneVal = Number(inputOne.value);
    var inputTwoVal = Number(inputTwo.value);
    var inputThreeVal = inputThree.value

    if (inputThreeVal === "+") {
        msg.innerText = sum(inputOneVal, inputTwoVal)
    } else if (inputThreeVal === "-") {
        msg.innerText = sub(inputOneVal, inputTwoVal)
    } else if (inputThreeVal === "*") {
        msg.innerText = multiply(inputOneVal, inputTwoVal)
    } else if (inputThreeVal === "/") {
        msg.innerText = divide(inputOneVal, inputTwoVal)
    }
    else{
        msg.innerText = "error"
    }
})

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}