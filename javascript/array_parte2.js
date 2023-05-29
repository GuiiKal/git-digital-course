//Array - parte 2 - Métodos de array

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

//Fatiamento: slice
console.log(arr1.slice(0, 2))
console.log(arr1.slice(0, 1))
console.log(arr1.slice(2))

//Add elemento: push | unshift
console.log('Antes de add ', arr2)
arr2.push(10)
console.log('Depois de add ', arr2)
arr2.push(10, 20, 30)
console.log('antes de add com unshift ', arr2)
arr2.unshift(35)
console.log('Depois de add com unshift ', arr2)

//Removendo elementos: pop | shift
console.log('antes de remover com o pop ', arr2)
arr2.pop()
console.log('Depois de remover com pop ', arr2)

console.log('antes de remover com o shift ', arr2)
arr2.shift()
console.log('depois de remover com o shift ', arr2)

//Concatenando array: concat
console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

//Buscando elementos: indexOf | lastIndexOf
console.log(arr1)
const indiceElemento34 = arr1.indexOf(34)
console.log(indiceElemento34)

let arr3 = [1, 2, 3, 3, 3, 4, 3]
console.log(arr3.lastIndexOf(3))

//Descobrindo a existência de um elemtento: includes
console.log(arr1)
console.log(arr1.includes(10))

//Invertendo uma array: reverse 
console.log(`Array 1 normal`, arr1)
const arr1Invertido = arr1.reverse()
console.log(`Array 1 invertido`, arr1Invertido)