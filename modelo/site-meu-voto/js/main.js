const cpf = document.querySelector("#enviado");
const documento = document.querySelector("#cpf");
const res = document.getElementById('resultado');
const nome = document.getElementById('nome');

cpf.addEventListener("click", function(e){
    n = nome.value
    doc = documento.value
    if(n.length === 0 || doc.length < 11 || isNaN(doc)){
        documento.style.backgroundColor = 'salmon';
    } 
    else{
    documento.style.backgroundColor = 'white';
    let valor = documento.value
    console.log(`Nome de usuário: ${n}`);
    console.log(`CPF do usuário: ${valor}`);
    let para = document.createElement('p');
    para.style.textAlign = 'center';
    para.innerText = "LULA";
    res.appendChild(para)
    valor.innerText = ''}
})


