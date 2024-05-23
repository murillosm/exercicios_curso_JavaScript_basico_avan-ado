// Escreva uma função que receba um número negativo e retorne um
// número positivo;
// Dica: utilize a função Math.abs


function absNumber(number) {
    if (number < 0) {
        return Math.abs(number);
    }
    else {
        return `${number} - Já e um valor positivo `
    }
}

console.log(absNumber(-10));

console.log(absNumber(4));