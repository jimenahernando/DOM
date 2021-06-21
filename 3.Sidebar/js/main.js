const button = document.querySelector('button');
const aside = document.querySelector('aside');
const i = button.querySelector('i');
const main = document.querySelector('main');
const backdrop = document.querySelector('backdrop');


// 1. Cuando haga click en la X quiero que salga el aside
// 2. Si el aside esta cerrado quiero abrirlo pero si el aside esta abierto quiero que se cierre
// 3. cambiar la clase del icono
let isOpen = false;

button.addEventListener('click', () => {
    if(isOpen){
        // i.classList.add('fa-bars');
        // i.classList.remove('fa-times');
        aside.style.right = '-250px';
        main.style.marginRight = '0';
    } else{
        // i.classList.remove('fa-bars');
        // i.classList.add('fa-times');
        aside.style.right = '0';
        // para que cuando se muestre el aside las letras del texto se justifiquen
        main.style.marginRight = '250px';
    }

    i.classList.toggle('fa-bars');
    i.classList.toggle('fa-times');
    isOpen = !isOpen;
});