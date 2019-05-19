var pessoa = {
  "nome": "Marcos",
  "idade": 18,
  "solteiro": true
}
console.log(pessoa);
//Propriedades e métodos consistem em nome (chave) e valor


// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}
quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// MÉTODOS
// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14
// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?


// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'

// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';


// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu.metadeHeight(); // 25
// sem o this, seria 60
// this irá retornar o próprio objeto


// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}
//metodo que verificar se tem essa propriedade existe ou não 
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
// hasOwnProperty é um método de Object


// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';
nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
// Uma string herda propriedades e métodos do construtor String()


//deixa em minusculo
console.log(nome.toLocaleLowerCase());

// NÚMEROS
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e método

// FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();//ficaria algo escrito
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
areaQuadrado.length; // 1


// ELEMENTOS DO DOM
var btn = document.querySelector('.btn');
btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.


// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.