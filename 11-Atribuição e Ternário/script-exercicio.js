// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);
// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
darCredito = (possuiCarro && possuiCasa) ? 'Dar' : 'Negar';
console.log(darCredito);
