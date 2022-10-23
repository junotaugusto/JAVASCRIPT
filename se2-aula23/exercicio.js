let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC);

//Faça com que o valor de A tenha o valor de B, que o valor de B tenha o valor de C e que o valor de C tenha o valor de A.
/*const varAtemp = varA
varA = varB;
varB = varC;
varC = varAtemp;
console.log(varA, varB, varC);
*/
console.log('Ou...');
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);




