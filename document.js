//1
let datatypes = ["functions", "numbers", "objects", "arrays", "undefined", "strings", "booleans"];

/////2

// if(a == b) ///returns false


////3

//let har local scope by default men om man deklarerar det i global scope så får den global scope ändå. Var har global scope by default och const 
//kan inte modifieras.


/////4
var string = "abc";
console.log(typeof string);


////5 

//c är ett kodblock


///6

///alert("Ariba")

///7

//goodbye world


//////8

// A, B och C

///9

let sentence = "If you're having code problems I feel bad for you son. I got 99 problems, but a glitch ain't one."
console.log(sentence.length);

//10

let name = "Matheus";
console.log(`Hej ${name} din gamle knasboll!`);

//11

let fruits = ["päron", "äpple", "banan", "vindruvor", "lime"];

//12

fruits.unshift("citron");
fruits.push("vattenmelon");

//13

fruits.splice(0,1);
fruits.splice(6,1);

//14

//15

fruits = ['apple', 'orange', 'pear', 'kiwi'];

fruitsCopy = [...fruits];
fruitsCopy[0] = "pineapple";

console.log(fruitsCopy);

// 16

let num = [1,5,78,7,122,3,4,65,40,2,8]
console.log(Math.min(...num));

// 17

let a = [1,2,3];
let b = [4,5,6];

let c = a.concat(b);

console.log(c);

//18

//19


//20

let names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

names.forEach(function(element) {
    console.log(element.toUpperCase());
})


//21

let names2 = [
    { name: 'sixten', age: 32 },
    { name: 'Eva', age: 19 },
    { name: 'Ali', age: 67 },
    { name: 'Kim', age: 13 },
    { name: 'Greger', age: 30 },
    { name: 'Alicia', age: 82 }
];

let filter = [];
    
names2.forEach(function(element) {
    if(element.age >= 30) {
        filter.push(element.name);
    }
    
})
console.log(filter);
  
// 22
function ass23() {
    names = ['sixten', 'Eva', 'Ali', 'Kim', 'Greger', 'Alicia'];

    if(names.includes("Ewa")) {
        return true;
    }
    
    else {
        return false;
    }
}






//23

function ass24() {
    let count = 1;

    for (let i = 0; i < 1000; i++) {
        console.log(count);
        count++;
    }
}


// 24

function ass24() {

    for(let i = 100; i > 0; i--) {
        console.log(i);
    }
}

ass24();

// 25

fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//26 

fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + " " +  i);
}


//27

function ass27() {

let color = ["hearts", "diamons", "clubs", "spades"];
let cards = [];

    for(let i = 0; i < color.length; i++){

        for(let z = 2; z < 15; z++) {
            cards.push(color[i] + " " + z)
        }
    }

    return cards;


}

console.log(ass27());

//28

let book = {
    title: "",
    author: "",
    genres: []
}

//29

let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}

console.log(person.adress.city);


//30
personCopy = {...person};

//31


