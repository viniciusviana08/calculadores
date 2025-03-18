let quantidadePessoas = document.getElementById('quantidadePessoas');
let diasUteis = document.getElementById('diasUteis');
let resultado = document.getElementById('resultado');

function calcularCusto() {
    let qtdPessoas = Number(quantidadePessoas.value);
    let dias = Number(diasUteis.value);

    let valorPorPessoaDia;
    if (qtdPessoas >= 1 && qtdPessoas <= 49) {
        valorPorPessoaDia = 4.50;
    } else if (qtdPessoas >= 50 && qtdPessoas <= 99) {
        valorPorPessoaDia = 4.10;
    } else if (qtdPessoas >= 100 && qtdPessoas <= 149) {
        valorPorPessoaDia = 3.80;
    } else if (qtdPessoas >= 150) {
        valorPorPessoaDia = 3.60;
    } else {
        valorPorPessoaDia = 0;
    }

    let custoMensal = qtdPessoas * dias * valorPorPessoaDia;

    resultado.innerHTML = `<p>O custo mensal do transporte é: <strong>R$ ${custoMensal.toFixed(2)}</strong></p>`;
}

function limpar() {
    quantidadePessoas.value = '';
    diasUteis.value = '';
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