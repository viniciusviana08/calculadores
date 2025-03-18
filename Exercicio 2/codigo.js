let salario = document.getElementById('salario');
let resultado = document.getElementById('resultado');

function calcularAumento() {
    let salarioAtual = Number(salario.value);

    
    let aumento;
    if (salarioAtual <= 1200) {
        aumento = salarioAtual * 0.16;
        resultado.innerHTML += `<p>Salário atual: R$ ${salarioAtual.toFixed(2)} | Aumento de 16%: R$ ${aumento.toFixed(2)} | Novo salário: R$ ${(salarioAtual + aumento).toFixed(2)}</p>`;
    } else if (salarioAtual <= 2100) {
        aumento = salarioAtual * 0.13;
        resultado.innerHTML += `<p>Salário atual: R$ ${salarioAtual.toFixed(2)} | Aumento de 13%: R$ ${aumento.toFixed(2)} | Novo salário: R$ ${(salarioAtual + aumento).toFixed(2)}</p>`;
    } else if (salarioAtual <= 3000) {
        aumento = salarioAtual * 0.10;
        resultado.innerHTML += `<p>Salário atual: R$ ${salarioAtual.toFixed(2)} | Aumento de 10%: R$ ${aumento.toFixed(2)} | Novo salário: R$ ${(salarioAtual + aumento).toFixed(2)}</p>`;
    } else {
        aumento = salarioAtual * 0.05;
        resultado.innerHTML += `<p>Salário atual: R$ ${salarioAtual.toFixed(2)} | Aumento de 5%: R$ ${aumento.toFixed(2)} | Novo salário: R$ ${(salarioAtual + aumento).toFixed(2)}</p>`;
    }
}

function limpar() {
    salario.value = '';
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