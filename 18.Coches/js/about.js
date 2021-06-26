const form = document.querySelector('form');
const button = document.querySelector('button');

//redireccionamiento
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event);
    setTimeout(() => {
;        window.location.href = 'http://127.0.0.1:5500/18.Coches/index.html'
    }, 2000);
})

//hoy en dia las paginas no se recargan...
// SPA single page application