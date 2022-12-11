const fizzBuzz = (n) => {
    if (isNaN(n)){ //Checando se é um número.
        return 'Digite um número'
    } else {
        if (n <= 100){
            if(n % 3 === 0 && n % 5 === 0){
                return 'FizzBuzz' //Tem que vir primeiro por causa de return
            } else if (n % 3 === 0){
                return 'Fizz'
            } else if (n % 5 === 0){
                return 'Buzz'
            } else if (n % 3 !== 0 && n % 5 !== 0){
                return n
            }
        } else {
            return 'Digite um número menor do que 100'
        }
    }
    
    
}

console.log(fizzBuzz(a))