// Arrays

//Como criar

let arr = ['Gui', 26, 1.7, true]
console.log(arr)

//Como acessar
console.log('Primeiro elemento', arr[0])
console.log('Segundo elemento', arr[1])

//Como obter seu tamanho
console.log(arr.length)

//Como percorrer
//primeira maneira e mais usada
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// segunda maneira
for(let elemento of arr){
    console.log(elemento)
}
//terceira maneira
for (let indice in arr){
    console.log(indice)
}