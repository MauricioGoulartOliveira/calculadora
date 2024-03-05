let operacaoAtual = '';
let operador = '';
let operacaoPendente = false;

function pressionaNumero(num) {
    if (operacaoPendente) {
        operacaoAtual += ' ' + num;
        operacaoPendente = false;
    } else {
        operacaoAtual += num;
    }
    atualizaDisplay(operacaoAtual);
}

function escolheOperacao(op) {
    if (!operador) {
        operacaoAtual += ' ' + op;
        operador = op;
    } else {
        calcular();
        operacaoAtual += ' ' + op;
    }
    operacaoPendente = true;
}

function calcular() {
    try {
        operacaoAtual = eval(operacaoAtual).toString();
        atualizaDisplay(operacaoAtual);
        operador = '';
    } catch (e) {
        atualizaDisplay('Erro');
        operacaoAtual = '';
        operador = '';
    }
}

function limpar() {
    operacaoAtual = '';
    operador = '';
    atualizaDisplay('0');
}

function atualizaDisplay(valor) {
    document.getElementById('display').innerText = valor;
}
