const input1 = prompt("Primeiro número: ")
const input2 = prompt("Segundo número: ")

const x = parseFloat(input1)
const y = parseFloat(input2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert (

    "Resultados:\n" +
    "\nSoma: " + sum +
    "\nSubtração: " + subtraction +
    "\nMultiplicação: " + multiplication +
    "\nDivisão: " + division

)