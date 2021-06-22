/**
 * Cuando haga el clic en el boton quiero poner la clase dark al body
 *
 *  Si yo estoy en dark que se ponga light
 * Si estoy en light que se ponga dark
 * 
 * Toggle
 * GO DARK - GO LIGHT
 * 
 */

const button = document.querySelector('button');

let isDark = false;
button.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    if(isDark){
        button.innerText = 'GO DARK';
    } else {
        button.innerText = 'GO LIGHT';
    }
    isDark = !isDark;  
});