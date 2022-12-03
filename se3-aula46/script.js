function zeroaEsquerda(num){
   return num >=10 ? num : `0${num}` 
}

function formatData(data){
    const dia = zeroaEsquerda(data.getDate());
    const mes = zeroaEsquerda(data.getMonth()) + 1;
    const ano = zeroaEsquerda(data.getFullYear());
    const hora = zeroaEsquerda(data.getHours());
    const minuto = zeroaEsquerda(data.getMinutes());
    const segundos = zeroaEsquerda(data.getSeconds());

    return `Hoje é dia ${dia} do ${mes} de ${ano} - São ${hora} horas, ${minuto} minutos e exatamente ${segundos} segundos.`
}
const data = new Date()
let a = formatData(data)

console.log(a)