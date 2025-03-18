let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function somar() {
    let resultado = Number(n1.value) + Number(n2.value);
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${resultado}</p>`;
}

function subtrair() {
    let resultado = Number(n1.value) - Number(n2.value);
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${resultado}</p>`;
}

function multiplicar() {
    let resultado = Number(n1.value) * Number(n2.value);
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${resultado}</p>`;
}


function dividir() {
    if (Number(n2.value) === 0) {
        res.innerHTML += `<p class="text-red-500">Erro: Divisão por zero não é permitida.</p>`;
    } else {
        let resultado = Number(n1.value) / Number(n2.value);
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${resultado}</p>`;
    }
}


function potencia() {
    let resultado = Math.pow(Number(n1.value), Number(n2.value));
    res.innerHTML += `<p>O resultado da potência de ${n1.value} elevado a ${n2.value} é ${resultado}</p>`;
}

function raizQuadrada() {
    let resultado = Math.sqrt(Number(n1.value));
    res.innerHTML += `<p>A raiz quadrada de ${n1.value} é ${resultado}</p>`;
}

function limpar() {
    res.innerHTML = '';
    n1.value = '';
    n2.value = '';
}