alert('Vamos fazer uma conta de adição:')
let num1 = prompt('Digite o primeiro número:')
let num2 = prompt('Digite o segundo número:')
let conta = Number(num1) + Number(num2); //Lembrando que é preciso converter os valores em números para que a operação seja realizada, senão o navegador entende tudo como strings.
console.log(`A adição de ${num1} por ${num2} resultou no número ${conta}`)
alert(`O resultado foi ${conta}`)