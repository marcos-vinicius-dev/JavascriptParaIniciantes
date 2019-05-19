var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
var exp2 = 2e-2; // 0.02
console.log(exp2);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

console.log(isNaN(modulo));


//-----------Curiosidade----------------
//NaN (Not a Number)
// É possível verificar se uma variável é NaN 
// ou não com a função isNaN()

//--------Operadores aritimeticos binarios-----
// var total2 = (20 + 5) * 2; // 50
// Parênteses para priorizar uma expressão

// -------OPERADORES ARITMÉTICOS UNÁRIOS------
// var incremento = 5;
// console.log(incremento++); // 5
// console.log(incremento); // 6

// O + e - tenta transformar o valor seguinte em número
// var idade = '28';
// +idade; // 28 (número)
// -idade; // -28 (número)
// console.log(+idade + 5); // 33 