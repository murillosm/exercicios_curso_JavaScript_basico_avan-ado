// Escreva uma função que recebe a idade de uma pessoa;
// Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
// Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
// Execute a função nos dois casos;



function idadeParaDirigir(age) {
    if (age >= 18) {
        console.log("18 anos pode entrar na auto escola!");
    }
    else if (age < 18) {
        console.log("menos de 18 anos não pode entrar na auto escola!");
    }
}

idadeParaDirigir(19);
idadeParaDirigir(17);