// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
// Além disso imprima somente os números pares no console;



// function decremento(num) {
//     let valores = [];
//     let j = 0;
//     for (let i = num; i >= 0; i--) {
//         if (i % 2 === 0) {
//             valores[j] = i;
//             j++
//         }
//     }
//     return valores
// }

// console.log(decremento(10))

function decremento(num) {
    for (let i = num; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

decremento(10)