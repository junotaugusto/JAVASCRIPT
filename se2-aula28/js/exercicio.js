        let numero = Number(prompt('Digite um número'));
        const numeroTitulo = document.getElementById('numero-titulo');
        const texto = document.getElementById('texto');
        numero = parseFloat(numero); //Converter para Float para que o número possa aparecer com vírgulas no site.

        numeroTitulo.innerHTML = numero;

        texto.innerHTML = `<p>A raiz quadrada do número escolhido é <strong>${Math.sqrt(numero).toFixed(2)}</strong></p>`
        
        texto.innerHTML += `<p>O tipo do número é ${typeof(numero)}</p>`
        
        texto.innerHTML += (`<p>O número ${numero} é inteiro? <strong>${Number.isInteger(numero)} </p>`);

        texto.innerHTML += (`<p> O número ${numero} não é um número (NaN)? ${Number.isNaN(numero)}</p>`);

        texto.innerHTML += (`<p>O número ${numero}, arredondado para cima, fica ${Math.ceil(numero)}</p>`);

        texto.innerHTML += (`<p>O número ${numero}, arredondado para baixo fica ${Math.floor(numero)}</p>`);

        texto.innerHTML += (`O número arredondado com duas casas decimais é ${numero.toFixed(2)}`);

        