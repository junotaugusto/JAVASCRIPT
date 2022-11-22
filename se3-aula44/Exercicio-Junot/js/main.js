 function imc() {
    let peso = Number(document.getElementById('npeso').value);
    let altura = Number(document.getElementById('naltura').value);
    let indice = peso / (altura*altura)
    let res = document.getElementById('resultado')
    if(peso == 0){
         resultado.style.background = '#af1b1b'
         resultado.style.color = 'white'
         resultado.innerHTML = `Digite seu peso.`
    } else if (altura == 0) {
        resultado.style.background = '#af1b1b'
         resultado.style.color = 'white'
        resultado.innerHTML = `Digite sua altura.`
    }
     else if(indice < 18.5){
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Abaixo do Peso)`
    } else if(indice >= 18.50 && indice <= 24.99){
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Peso Normal)`
    } else if(indice >= 25 && indice <= 29.99){
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Sobrepeso)`
    } else if(indice >= 30 && indice <= 34.99){
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'    
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Obesidade Grau 1)`
    } else if(indice >= 35 && indice <=39.99) {
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'    
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Obesidade Grau 2)`
    } else {
            resultado.style.background = '#0affff'
            resultado.style.color = 'black'    
            resultado.innerHTML = `Seu IMC é ${indice.toFixed(2)} (Obesidade Grau 3)`
    }

}