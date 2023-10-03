let x: number = 10;

console.log(x);



//tuplas 

let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b"]]


//myTuple = [true, false, true]  --- Errado


// Object Literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18,
};

console.log(user);

//Variavel Any nao é aceita em TypeScript


// Union Type
let id: string | number = "10"

id = 200

id = 200

// id = true
// id = []

// type alias 
type myIdType = number | string 

const userId: myIdType = 10

// Enum
// tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};

console.log(camisa);


// Literal Types

let teste: "algumvalor" | null

//teste = "outrovalor"

teste = "algumvalor"
teste = null;


// Teste de uso por ex: Validar login = login (suces) | Null (Fail)

//funcoes

function sum(a: number, b: number) {
    return a + b
}

console.log(sum(12, 12));

// Errado: console.log(sum( "12", true));

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Lucas"));


function logger(msg: string): void {
    console.log(msg)
}

logger("Teste!")


// Narrowing - checagem de tipos

function doSomething(info: number | boolean) {
    if(typeof info === "number"){
        console.log(`o número é ${info}` );
        return;
    }
    console.log("Nao foi passado um número")
}

doSomething(5);
doSomething(true);