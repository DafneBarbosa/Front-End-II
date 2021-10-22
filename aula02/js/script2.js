let pessoa1 = {
    nome: 'Dafne',
    idade: 30,
    genero: 'F'
}

console.log(pessoa1);

for(let campo in pessoa1){
    console.log(campo,":",pessoa1[campo]);
}

let pessoa2 = {
    nome: 'Ana',
    idade: 22,
    genero: 'F'
}

let pessoas = [];
pessoas.push(pessoa1);
pessoas.push(pessoa2);

console.log(pessoas);

for(let pessoa of pessoas){ //of eh para arrays
    for(let campo in pessoa){ //in para objetos
        console.log(campo,":",pessoa[campo]);
    }
}



