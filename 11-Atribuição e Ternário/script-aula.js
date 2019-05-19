// COMENTÁRIOS
// Servem para explicar o código

// Comentário de uma linha

/*
Comentário
com diversas
linhas
*/
// var nome = 'André';

// Comentar uma linha de código desativa a mesma. Não deixe linhas de código comentadas no arquivo final.



// OPERADORES DE ATRIBUIÇÃO
// Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

var numero = 20;
numero += 10;
console.log(numero);



// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else
var idade = 19;
var naoPossuiDiabetes = true;
var podeBeber = (idade >= 18) ? 'Pode beber ' : 'Não pode beber';
var podeBeberMuito = (idade >= 18 && naoPossuiDiabetes) ?  'Pode mano' : 'Não pode doido';
console.log(podeBeber) // Pode beber
console.log(podeBeberMuito);
// condição ? retorno true : retorno false
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição


// IF ABREVIADO
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
// ou
if(possuiFaculdade)
  console.log('Possui faculdade');
else
  console.log('Não possui faculdade');
// Eu particularmente prefiro a segunda opção aqui.