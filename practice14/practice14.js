// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar.
// Write a function which takes two objects and return the person with more age.

var persons = [
    {
        name: "Ram",
        age: 35,
        yuga: "Treta"
    },
    {
        name: "Krishna",
        age: 31,
        yuga: "Dwapar"
    }
]

function play(){
    var olderAge = "0";
    var olderPerson = ""
    for(let i=0; i<persons.length; i++){
        if(persons[i].age > olderAge){
            olderAge = persons[i].age;
            olderPerson = persons[i].name
        }
    }
    console.log(`${olderPerson} is elder and his age is ${olderAge}`)
}
play()
























// var persons = [{
//         name: "Ram",
//         age: 25,
//         yuga: "Treta"
//     },
//     {
//         name: "Krishna",
//         age: 31,
//         yuga: "Dwapar"
//     }
// ]

// function moreAge(){
//     var olderAge = 0;
//     var olderPerson = ""

//     for(let i=0; i<persons.length;i++){
//         if(persons[i].age > olderAge){
//             olderAge=persons[i].age
//             olderPerson = persons[i].name
//         }
//     }
//     console.log(`${olderPerson} is elder and his age is ${olderAge}`)
// }

// moreAge();