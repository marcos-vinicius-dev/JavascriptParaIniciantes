//var e let pode mudar o valor abributido, const não pode
var nome = 'Marcos';
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco, nome);

// let não deixa criar duas variaveis igual
// Uncaught SyntaxError: Identifier 'time' has already been declared
// let time = 'Vasco';
// let time = 'Londrina';

// nunca pode se modificar uma const
// Uncaught TypeError: Assignment to constant variable.
// const pessoa = "Marcos";
// pessoa = "Marquin";

