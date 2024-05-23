// Escreva uma função que detecta o tipo de dado passado;
// Verifque se é um: number, boolean ou string
// E retorne uma mensagem para cada tipo;
// Execute uma função para cada caso;


function detectarTipoDeDado(dado) {
    if (typeof dado === 'number') {
        return 'O dado é um número';
    } else if (typeof dado === 'boolean') {
        return 'O dado é um boolean';
    } else if (typeof dado === 'string') {
        return 'O dado é uma string';
    } else {
        return 'Tipo de dado não identificado';
    }
}