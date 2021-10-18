// Create a CLI app which would detect fake news. This app will take news as input and then source. 
// If source is Facebook or whatsapp then it will output user saying,
// "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

var readlineSync = require(`readline-sync`);

var news = readlineSync.question("Enter News: ")
var source = readlineSync.question("Enter the Source: ")

if(source.toLowerCase() === "facebook" || source.toLowerCase() ==="telegram" || source.toLowerCase() === "whatsapp"){
    console.log("Don't believe things on FB, Whatsapp and Telegram")
}
else{
    console.log("Genuine News")
}