//funções 
function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado(4)); 

function imc(peso, altura){
  return peso / (altura * altura);
}
console.log(imc(80, 1.8));

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Você gosta do céu';
  }else if(cor === 'verde'){
    return 'Você gosta do mato';
  }
  else{
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita("azul"));

//argumentos podem ser funções
//chamadas de Callback, geralmente são funções que ocorrem após algum evento

//funcção anonima, não possui nome declarado
addEventListener('click', function(){
  console.log('Clicou');
});
//A função possui dois argumentos
//Primeiro é a string 'click', evento de click
//Segundo é uma função anônima, a função que vai esxecutar caso o evento click ocorra.

//returnando valores
function terceiraIdade(ideia){
  if(typeof  idade !== 'number'){
    return 'Informe a sua idade:';
  }else if(ideia >= 60){
    return true;
  }else{
    return false;
  }
}

//escopo
//variaveis e funções definidas dentro de um bloco {}, não são visiveis fora dele.
function faltaVisitar(paisesVisitados){
  let totalPaises = 193;
  return `falta visitar ${totalPaises - paisesVisitados} paises `;
}
console.log(faltaVisitar(150));

// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';
function dados() {
  var nome = 'André';
  var idade1 = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade1 = 29;
    return `${nome}, ${idade1}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro



//-----------Curiosidade----------
//Parênteses () executam uma função

//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function(){} ou () => {}

// cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
