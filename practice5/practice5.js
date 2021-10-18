// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students.
// And then print who has the highest marks. What if I ask you to print the average as well?


var readlineSync = require(`readline-sync`)
var noOfStudents = readlineSync.question("Enter number of Students ")
var name = "";
var highestMarks = 0;

for (let i = 0; i < noOfStudents; i++) {
    var userName = readlineSync.question("Enter student no " + [i+1] + " name: ")
    var unitMarks = readlineSync.question("Enter your unit test marks: ")
    var priMarks = readlineSync.question("Ehter your pre final marks: ")
    var finalMarks = readlineSync.question("Enter your Final Marks: ")
    var totalMarks = Number(unitMarks) + Number(priMarks) + Number(finalMarks);
    var averageMarks = totalMarks/3;
    console.log("Total Marks: " + totalMarks);
    console.log("averageMarks: " + averageMarks);
    console.log("--------------------------------------------------")

    if(totalMarks>highestMarks){
        highestMarks = totalMarks;
        name = userName;
    }
}

console.log("\n" + highestMarks + " is the highest marks of student name " + name)
    


