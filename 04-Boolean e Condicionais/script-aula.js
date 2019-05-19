var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

//TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
//Todo o resto é truthy
// Truthys
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

//OPERADOR LÓGICO DE NEGAÇÃO !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy


// OPERADORES DE COMPARAÇÃO
// Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

// OPERADORES DE COMPARAÇÃO
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
//verfica se é numero mesmo, por esse motivo quando é strig não passa
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// OPERADORES LÓGICOS &&
// && Compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// OPERADORES LÓGICOS ||
// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
// Retorna o primeiro valor true que encontrar