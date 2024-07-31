const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt("Digite o segundo número:"))

const sum = numberOne + numberTwo
const rest = numberOne % numberTwo

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é ${rest}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números são pares: ${sum}`)
}else{
  alert(`A soma dos dois números é impar: ${sum}`)
}
if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais")
}else{
  alert("Os números inseridos são diferentes")
}