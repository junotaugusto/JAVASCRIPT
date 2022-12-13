const fizzBuzz = (n) => {
    if (isNaN(n)){ //Checando se é um número.
        return 'Digite um número'
    } else {
        if (n <= 100){
            if(n % 3 === 0 && n % 5 === 0){
                return `${n} - FizzBuzz` //Tem que vir primeiro por causa de return
            } else if (n % 3 === 0){
                return `${n} - Fizz`
            } else if (n % 5 === 0){
                return `${n} - Buzz`
            } else if (n % 3 !== 0 && n % 5 !== 0){
                return n 
            }
        } else {
            return 'Digite um número menor do que 100'
        }
    }   
}

for (let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i))
}
