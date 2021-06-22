console.log('Hello');

const obj = {
    id: '12_GE4Ds',
    country: 'Singapore',
    color: 'red',
    size: 45
}

const country = obj.country;
const color = obj.color;
const size = obj.size;

//syntactic sugar
const {country, color, size} = obj;

// const {country, color, ...objRest} = obj;

//crear variables al vuelo de un objeto

// console.log(country, color, size);

const ar = [1,2,3,4,5,6];

// const first = ar[0];
// const third = ar[2];
// const fourth = ar[3];


// const [first, second, third, fourth] = ar;

// console.log(first, third, fourth)

const [first, ...rest] = ar;

console.log(first, rest);

const abel = {name: 'Abel', age: 40};

//destructuro dentro de los parametros
function printPerson({ name, age }){
    // const { name, age } = person;
    console.log(name, age);
}

printPerson(abel);