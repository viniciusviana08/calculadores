
let salario = document.getElementById('salario');
let horasNormais = document.getElementById('horasNormais');
let horasFinaisSemana = document.getElementById('horasFinaisSemana');
let resultado = document.getElementById('resultado');

function calcularHorasExtras() {
    let salarioBruto = Number(salario.value);
    let horasNormaisTrabalhadas = Number(horasNormais.value);
    let horasFinaisSemanaTrabalhadas = Number(horasFinaisSemana.value);
    let valorHora = salarioBruto / 200;
    let valorHorasNormais = valorHora * horasNormaisTrabalhadas;
    let valorHorasFinaisSemana = valorHora * horasFinaisSemanaTrabalhadas * 1.5;
    let total = valorHorasNormais + valorHorasFinaisSemana;
    resultado.innerHTML = `<p>O valor a receber pelas horas extras é: <strong>R$ ${total.toFixed(2)}</strong></p>`;
}

function limpar() {
    salario.value = '';
    horasNormais.value = '';
    horasFinaisSemana.value = '';
    resultado.innerHTML = 'R$ 0,00';
}


function atualizarDataHora() {
    const elementoDataHora = document.getElementById('dataHora');
    const agora = new Date(); // Cria um objeto Date com a data e hora atuais
    const opcoes = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    // Formata a data e hora conforme as opções
    elementoDataHora.textContent = agora.toLocaleDateString('pt-BR', opcoes);
}

// Atualiza a data e hora a cada segundo
setInterval(atualizarDataHora, 1000);
atualizarDataHora(); // Chama a função imediatamente ao carregar a página