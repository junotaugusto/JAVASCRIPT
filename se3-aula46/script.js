/*
const data = new Date();
String(data.getDate()).padStart(2,'0')
console.log(data.toString())
*/
/*
function ZeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = ZeroAEsquerda(data.getDate());
    const mes = ZeroAEsquerda(data.getMonth()) + 1;
    const ano = ZeroAEsquerda(data.getFullYear());
    const hora = ZeroAEsquerda(data.getHours());
    const min = ZeroAEsquerda(data.getMinutes());
    const seg = ZeroAEsquerda(data.getSeconds());
 
    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}
const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
*/


/*
function letras(l1, l2){
    let letra1 = /^[a-zA-Z]+$/.test(l1);
    let letra2 = /^[a-zA-Z]+$/.test(l2);
    if(letra1 == false || letra2 == false){
        return -1
    }
    else if(l1.toUpperCase() === l1 && l2.toUpperCase() === l2){
        return 1
    } else {
        return 0
    }
}

console.log(letras('A', '?'))
*/
/*
let numero = 10;
function soma(n1,n2){
    n3 = 5
    return n1 + n2
}
console.log(soma(2,2))
console.log(numero + n3)
*/
/*
function proximo(arr, item){
    arr.push(item)
    return item
}

var testArr = [1,2,3,4,5]
console.log('Before: ' + JSON.stringify(testArr))
console.log(proximo(testArr,6))
console.log('After: ' + JSON.stringify(testArr))


var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:    
        case 6:
            count++
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break
    }
    let holdbet = "Hold"
    if (count > 0){
        holdbet = "Bet"
    }
    return count + " " + holdbet
}

*/
/*
const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  console.log(ourStorage.cabinet["top drawer"].folder1)
  */
let numero = 0
function teste(){
    numero = 5
    return numero += 5
}
teste()
console.log(teste(),numero)
