//importando a biblioteca
const input = require('readline-sync');

//O problema
const nota1 = Number(input.question('Informe a nota:'));
const nota2 = Number(input.question('Informe a nota:'));
const nota3 = Number(input.question('Informe a nota:'));

let media = (nota1 + nota2 + nota3) / 3;

//acumulador
// let acumulador = 0;
// acumulador = acumulador + 10;
// acumulador += 2;
// acumulador++;
// console.log(acumulador)

// Estrutura For
for (let i = 0; i < 10; i++){
    console.log('Repeticao', i)
    let valor = Number(input.question('Informe um numero:'));
}

//Resolvendo o problema inicial
let avaliacao;
let soma = 0;
for(let i = 1; i<=3; i++){
    avaliacao = Number(input.question(`Informe a nota ${i}:`));

    soma = soma + nota;
}
console.log(`A média do aluno é ${soma / 3}`)