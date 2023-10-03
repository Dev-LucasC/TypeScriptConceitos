"use strict";
let x = 10;
console.log(x);
//tuplas 
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//myTuple = [true, false, true]  --- Errado
// Object Literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 18,
};
console.log(user);
//Variavel Any nao é aceita em TypeScript
// Union Type
let id = "10";
id = 200;
id = 200;
const userId = 10;
// Enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};
console.log(camisa);
// Literal Types
let teste;
//teste = "outrovalor"
teste = "algumvalor";
teste = null;
// Teste de uso por ex: Validar login = login (suces) | Null (Fail)
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// Errado: console.log(sum( "12", true));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Lucas"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
