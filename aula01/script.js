
let nota1 = prompt("Insira sua primeira nota: ");


let nota2 = prompt("Insira sua segunda nota: ");


let nota3 = prompt("Insira sua terceira nota: ");



let notas = [parseInt(nota1),parseInt(nota2),parseInt(nota3)];
console.log(`Notas = [ ${notas} ]`);

calculaSoma = (array) => {
    soma = 0;
    array.forEach(nota => {soma+=nota; console.log(soma);});
    return soma;
}

calculaMedia = (array) => {return calculaSoma(array)/(array.length)}

let media = calculaMedia(notas);
console.log(media.toFixed(2));

