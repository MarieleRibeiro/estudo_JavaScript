// function expression
// function anonymous 

const sum = function (number1, number2) { // parametros da função( parameters)
  let total = number1 + number2
  return total
}

/* EXEMPLO 1 */
//sum(2, 3) // executar a função/ argumentos - aguments
//sum(4, 5)
//sum(56, 3009845)


/* EXEMPLO 2 */

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maça')

console.log(copo);