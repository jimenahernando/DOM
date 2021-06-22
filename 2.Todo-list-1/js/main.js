const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createLi = (text) => {
    //creo el elemento
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', () =>{
        li.style.textDecoration = 'line-through';
    });
    return li;
}

button.addEventListener('click', () => {
    //tomo el contenido del input
    const value = input.value;

    if(!value) { //value === ''
        //console.error(`Debe completar el campo`);
        return;
    }

    const li = createLi(value);
    //se lo agrego al ul
    ul.appendChild(li);
    
    //limpio el input
    input.value = '';
});


