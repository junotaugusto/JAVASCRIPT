/*
Operadores de comparação:
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a 
== Igualdade (checa valor)
=== Igualdade e strita (checa valor e tipo)
!= Diferente de (checa valor)
!== Diferente estrito (checa valor e tipo)
*/

console.log(1>5); //Retorna true
const compara = 10>5;
console.log(compara); //Atribui a variável.

// Igualdade e Igualdade Estrita
let num1 = 10;
let num2 = '10';
console.log(num1 == num2); //Vai dar true porque ele compara o valor.
console.log(num1 === num2);// Vai dar false porque ele compara o valor e o tipo.
