//Pedir ao usuario para cadastrar um array de musicos

//Quantos musicos vao ter no array
let numeroMusicos = prompt("Insira o numero de musicos que voce deseja cadastrar:");

let musicos = [];

for(let i=0;i<numeroMusicos;i++){
    musicos.push(prompt("Insira o nome do musico "+(i+1)+": "));
}

alert("Esses sao os musicos que voce cadastrou: "+musicos);

for(let musico of musicos) console.log(musico); //tipo um forEach
musicos.forEach(musico => console.log(musico));


let certeza = confirm("Tem certeza?");
if(certeza) alert("Obrigada pela confianca")
else alert("Tudo bem ter duvidas")