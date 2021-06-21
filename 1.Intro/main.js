// MÉTODOS PARA SELECCIONAR 
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
// getElementById 
// querySelectorAll

// MÉTODOS PARA EVENTOS 
button.addEventListener('click', () => {
  h1.style.marginLeft = '50px';
  h1.style.color = 'blue';
  h1.style.textTransform = 'uppercase';

  const li = document.createElement('li');
  li.innerText = input.value;
  ul.appendChild(li);

  // Limpiar el input 
  input.value = '';
});

// MÉTODOS PARA CREAR ELEMENTOS HTML
const h2 = document.createElement('h2');
h2.innerText = 'Buenos días';
h2.id = 'subtitle';
h2.style.color = '#311280';
console.log(h2);
ul.appendChild(h2);