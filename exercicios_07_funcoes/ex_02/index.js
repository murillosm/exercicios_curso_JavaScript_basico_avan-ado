// Escreva uma função que recebe um parâmetro de idade
// E imprima esta mensagem no console com template literals dizendo
// “Você tem x anos”;

let realLineSync = require(`readline-sync`);

function myAge(age) {
    console.log(`Você tem ${age} anos`);
}

let age = realLineSync.question("Enter your age: ");

//let age = prompt("Enter your age:");

myAge(age);
