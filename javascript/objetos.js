//OBEJTOS

//COMO CRIAR
let pessoa = {
    nome: 'Guilherme',
    idade: 20,
    altura: 1.7,
}

console.log(pessoa)

//como acessar um elemento do objeto
console.log(pessoa.nome)
//forma alternativa de acesar a chave do objeto
console.log(pessoa['nome'])

//COMO ADD UM PAR CHAVE-VALOR
pessoa.sexo = 'm'
console.log(pessoa)

//COMO REMOVER UM PAR CHAVE-VALOR
delete pessoa.altura
console.log(pessoa)

//COMO PERCORRER
for(let indice in pessoa){
    console.log(indice) //percorre a chave do objeto, com a chave é possivel descobrir o valor do objeto 
}