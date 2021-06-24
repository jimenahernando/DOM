//SINGLE THREADED
//BLOCKIN
const a = 3;
const b = 2;

const add = (num1 ,num2) => num1 + num2;

console.log('start loop');
let c = 0;
for (let i = 0; i < 10000000; i++) {
    c = i;
}
console.log('end loop');
console.log(c);
const result = add(a,b);

console.log(result);

//SET TIMEOUT
const timer = setTimeout(() => {
    console.log(`DINNNNNNNNGGGGGGGGGGGG!!!!!!!!!!!!`);
}, 5000);

//cancela el timeout
//clearTimeout(timer);

//esto va a aparecer
console.log(`NEURONAS EXPLOTANDO`);

//SET INTERVAL
let count = 1;
const interval = setInterval(() => {
    console.log(count++);
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 7000);
