// //PARA GUARDAR UNA VARIABLE
// const grajo = `Cuando el grajo vuela bajo hace un frio del carajo`;
// localStorage.setItem('TEST', grajo);

// //PARA OBTENER EL VALOR MEDIANTE LA CLAVE
// let value = localStorage.getItem('TEST');
// console.log(value);

// //PARA ELIMINAR UN VALOR
// value = localStorage.removeItem('TEST');

// //NO FUNCION CON ARRAYS
// let ar = ['pepe', 'juan', 'pedro', 'ramiro']
// localStorage.setItem('ARRAY', ar);

// ar = localStorage.getItem('ARRAY');
// console.log(ar);

// //TAMPOCO FUNCIONA CON OBJETOS
// const obj = {naem: 'Antonio', color: 'red'};
// localStorage.setItem('OBJ', obj);

const musicians = [
    { name: 'Evans' , instrument: 'piano'},
    { name: 'Davis' , instrument: 'trumpet'},
]

// //Convierto en un string en formato json
// const jsonMusicians = JSON.stringify(musicians);
// localStorage.setItem('MSC', jsonMusicians);

//te muestra que es solo un string
// console.log(localStorage.getItem('MSC'));

//recuperar el string y pasarlo a javascript
const stringMusicians = localStorage.getItem('MSC');
const parsedMusicians = JSON.parse(stringMusicians);

console.log(parsedMusicians);