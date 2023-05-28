// Laços condicionais (loop)

//importando a biblioteca
const input = require('readline-sync');

// const numSorteado = Math.random();
const numSorteado = 5;

let num = Number( input.question('Escolha um numero'));

console.log(num, typeof num);
// console.log(numSorteado, typeof numSorteado);

while(num !== numSorteado){
    console.log('Tente novamente, voce errou')

    num = Number( input.question('Escolha um numero'));
}



