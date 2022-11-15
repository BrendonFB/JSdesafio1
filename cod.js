let numberOne = Number( prompt("Entre com o número 1") )
let numberTwo = Number( prompt("Entre com o número 2") )

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mul = numberOne * numberTwo
let div = numberOne / numberTwo
let rest = numberOne % numberTwo
let evN = (sum % 2) == 0
let eQn = numberOne == numberTwo

alert("A soma é "+ sum)
alert("A subtração é "+ sub)
alert("A multiplicação é "+ mul)
alert("A divisão é "+ div)
alert("O resto da divisão é "+ rest)

if(evN)
  alert("A soma dos números é Par")
    else
      alert("A soma dos números é Impar")

if(eQn)
  alert("Número são iguais")
    else
      alert("Números diferentes")

