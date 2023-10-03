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

