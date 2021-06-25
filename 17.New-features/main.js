const age = 18;
// const isOld = age > 50 ? 'erer viejo' : nul;

const isOld = age > 50 && 'erer viejo';
console.log(isOld);

const port = 3000;

const assign = () => {
    const currentPort = port || 6666;
    console.log(currentPort);
}

assign();

// en vez de esto
// class Person {
//     constructor(name, age, hairColor, favColor, weight, bankAccount, drinksCowMilk){
//         this.name = name;
//         //...
//     }
// }

// const abel = new Person('Abel de la Fuente', 40, 'brown') 

class Person{
    constructor(person){
        //cuando consumimos de alguna API para asegurarme que todos los campos tengan algo
        this.name = person.name || '';
        this.age = person.age || 0;
        this.hairColor = person.hairColor || '';
        this.favColor = person.favColor || '';
        this.weight = person.weight || 0;
        this.bankAccount = person.bankAccount || '';
        // this.drinksCowMilk = person.drinksCowMilk ? true : false;
        //NULLISH COALESCING OPERATOR
        this.drinksCowMilk = person.drinksCowMilk ?? false;
        document.querySelector('h1').addEventListener('click', () => this.sayHello());

    }

    sayHello(){
        console.log(`Hello`);
    }
}

const abel = {
    name: 'Abel de la fuente',
    age: 40,
    hairColor: 'brown',
    favColor: 'blue',
    weight: 80,
    bankAccount: '123456789',
    drinksCowMilk: undefined,
}

const per = new Person(abel);
console.log(per);

//OPTIONAL CHAINING OPERATOR
// propiedad que existe
console.log(abel.name);

if(abel.dog){
    console.log(abel.dog);
}

const dog = abel?.dogName;
console.log(abel?.weight);

//funciones flecha
// para escribir callback de una manera mas corta

const ar = [3 ,2 ,5, 7, 8, 25];

// ar.forEach(function(num){
//     console.log(num);
// });

// ar.forEach((num) => console.log(num));

//TE DEVUELVE EL H1
// document.querySelector('h1')
//     .addEventListener('click',function() {
//         console.log(this);
//     });

//TE DEVUELVE TODO EL WINDOW
// document.querySelector('h1')
//     .addEventListener('click', () => console.log(this));


