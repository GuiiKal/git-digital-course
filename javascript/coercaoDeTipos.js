//Coerção (conversão) de tipos

//conversão manual
const num = 10;
console.log(num, typeof num);

const numEmString = String(num); //transformando o número em string
console.log(numEmString, typeof numEmString);

console.log(Number('11')); //transformando string em número
console.log(parseFloat('123.123')); //transformando em float
console.log(parseInt('123.123')) //transformando em int

//conversão implícita (automática)
console.log(10+'1') //se somar número com texto, o js vai concatenar tudo em um único texto
console.log(10+'1') //na subtração, ele converte para número e realiza a operação. O mesmo vale para as outras operações matemáticas (menos adição)

