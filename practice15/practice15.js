// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar 
// Write a function which takes two objects and return the person with more power.

var persons = [
    {
        name: "Ram",
        age: 25,
        yuga: "Treta",
        power: 2500
    },
    {
        name: "Krishna",
        age:31,
        yuga: "Dwapar",
        power: 2325
    }
]

function play(){
    var personPower = "0";
    var personName = "";

    for(let i=0; i<persons.length; i++){
        if(persons[i].power>personPower){
            personPower = persons[i].power;
            personName = persons[i].name;
        }
    }
    console.log(`${personName} is more powerful. Power is ${personPower}`)
}
play()
