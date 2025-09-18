//mesma call tudo tipo primitivo exceto null e object

//var nome = 'Luiz'; //string
//var idade = 26; //number int
//var peso = 83.5; //number float
//var humano = true; //boolean
//var time; //undefined
//var comida = null; //object
//var simbolo = Symbol(); //symbol
//var bigInt = 1234567890123456789012345678901234567890n; //bigint

//Primitivos (imutáveis) - string, number, boolean, undefined, null, symbol, bigint
//Referência (mutável) - array, object, function

// \ backslash é usado para escapar caracteres

var nome = 'kokushibo';
//typeof mostra o tipo da variavel
console.log( typeof nome);

//ex concatencao string 
var nome2 = 'muzan';

var nomeCompleto = nome + ' ' + nome2;
console.log(nomeCompleto);

var nome3 = 'Jkassner';

console.log(nome3 +'' +     "quebrou developer");

// template string ou template literal
//permite quebra de linha e expressões
//usa crase ``
var nome4 = `senilson ${nome3}`;
console.log(nome4);

