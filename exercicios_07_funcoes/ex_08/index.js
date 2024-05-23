// Escreva uma função que recebe uma string;
// Se o texto conter mais de 10 caracteres imprima “Texto muito longo”;
// Se conter menos, imprima “Texto dentro do limite”;



function tamanhoTexto(texto) {
    if (texto.length > 15) {
        console.log("Texto muito longo")
    }
    else if (texto.length <= 15){
        console.log("Texto dentro do limite")
    }
}

tamanhoTexto("Hello World")

tamanhoTexto("Hello World, Murillo")