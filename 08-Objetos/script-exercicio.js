// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let pessoa = {
  nome: "marcos",
  sobrenome: "vinicius",
  idade: 21,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = () => {
  retun `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  raca: 'labrador',
  idade: 10,
  cor: "Preto",
  late: (pessoa) => {
    if(pessoa === 'homem'){
      return 'Latir';
    }else{
      return 'Nada';
    }
  },
}

cachorro.late("homem");



// nomeie 3 propriedades ou métodos de strings
let metodoString = "marcos";
console.log(metodoString.toUpperCase());
console.log(metodoString.fixed);
console.log(metodoString.length);
console.log(metodoString.slice);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
//btn.addEventListener
//btn.appendChild
//btn.innerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
