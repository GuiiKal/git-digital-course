// FUNÇÃO

//Definincdo a função
function saudacao1() {
    console.log("Olá seja bem vindo ao curso de Js!")
}
saudacao1()

//como enviar parâmetros para as funçoes
function saudacao(nome, curso) {
    console.log(`Olá ${nome}, seja bem vindo ao curso de ${curso}!`)
}
saudacao('Gui', 'Javascript')

//retorno da função
function soma(num1,num2) {
    return num1 + num2
}
const resultado = soma(10,20)
console.log(resultado)