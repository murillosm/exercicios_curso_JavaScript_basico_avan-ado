// Escreva uma função que retorne um número aleatório;
// O número máximo retornado deve ser passado via parâmetro;
// Dica: utilize Math.random();


function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomNumber(100));