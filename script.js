var display = '';
var operacoes = [];

function agregarDisplay(elemento) {
  this.atualizarDisplay(display += elemento);
}

function calcularOperacao() {
  //salva a operacao realizada no historico de 'operacoes'
  operacoes.push(display + '=' + eval(display));
  this.atualizarDisplay(eval(display));
}

function limpar() {
  this.atualizarDisplay('');
}

function atualizarDisplay(valor) {
  display = valor;
  var displayInfo = document.getElementById('display-info');
  //input
  //displayInfo.value = '';
  //span
  displayInfo.innerHTML = valor;
}

function mostrarHistorico() {
  var listaHistorico = document.getElementById('lista-historico');

  //caso o elemento listaHistorico possua algum elemento filho, ele será removido
  //isso é feito para que não fique 'sujeira' de elementos exibidos anteriormente (duplicados)
  while(listaHistorico.firstChild){
    listaHistorico.removeChild(listaHistorico.firstChild);
  }

  //iteração na lista de 'operacoes' onde, pra cada 'operacao'
  //será criado um elemento li, seu conteúdo será atualizado com a operacao realizada
  //e esse elemento será adicionado no elemento 'listaHistorico'
  operacoes.forEach(operacao => {
    var li = document.createElement('li');
    li.innerHTML = operacao;
    listaHistorico.appendChild(li);
  });
}

function limparHistorico() {
  var listaHistorico = document.getElementById('lista-historico');

  //limpa as 'operacoes' realizadas
  operacoes = [];

  //caso o elemento 'listaHistorico' possua algum elemento filho, ele será removido
  while(listaHistorico.firstChild){
    listaHistorico.removeChild(listaHistorico.firstChild);
  }
}