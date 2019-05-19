var nome = "Marcos";
var sobrenome = "Vinicius";
var nomeCompleto = nome + ' ' + sobrenome;

//typeof -> verifica o tipo da variavel
console.log(typeof nome);
console.log(nomeCompleto);

//concatena
var ano = "2018";
var mes = 8;
console.log(ano + mes);

//soma
ano = 2018;
mes = 8;
console.log(ano + mes);

//escapar, serve par não interpretar o caractere escpecial
console.log('esse é bom de \'mais\'');

//Template String
console.log('esse é bom de' + nome +''); //ao inves de usar isso
console.log(`esse é bom de ${nome} meu mano`);//usar isso

//--------------------curiosidade------------------------------
//var time = null
//console.log(typeof time); 
//quando coloca uma variavel como null, retorna um objeto